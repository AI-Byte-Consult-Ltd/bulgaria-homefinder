import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit, Trash2, Eye, Star } from 'lucide-react';
import { toast } from 'sonner';

interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  status: string;
  is_priority: boolean;
  views: number;
  images: string[];
  created_at: string;
}

export const DashboardProperties = () => {
  const { t } = useTranslation();
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProperties(data || []);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm(t('dashboard.confirmDelete'))) return;

    try {
      const { error } = await supabase
        .from('properties')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast.success(t('dashboard.deleteSuccess'));
      fetchProperties();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  if (loading) {
    return <div className="text-center py-8">{t('dashboard.loading')}</div>;
  }

  if (properties.length === 0) {
    return (
      <Card>
        <CardContent className="py-8 text-center text-muted-foreground">
          {t('dashboard.noProperties')}
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <Card key={property.id} className="overflow-hidden">
          {property.images && property.images[0] && (
            <div className="aspect-video bg-muted">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg line-clamp-1">{property.title}</CardTitle>
              {property.is_priority && (
                <Badge variant="default" className="ml-2">
                  <Star className="h-3 w-3 mr-1" />
                  {t('dashboard.priority')}
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{property.location}</p>
          </CardHeader>
          
          <CardContent>
            <div className="flex justify-between items-center">
              <p className="text-2xl font-bold text-primary">
                €{property.price.toLocaleString()}
              </p>
              <Badge variant={property.status === 'published' ? 'default' : 'secondary'}>
                {property.status}
              </Badge>
            </div>
            <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
              <Eye className="h-4 w-4" />
              <span>{property.views} {t('dashboard.views')}</span>
            </div>
          </CardContent>
          
          <CardFooter className="gap-2">
            <Button variant="outline" size="sm" className="flex-1">
              <Edit className="h-4 w-4 mr-1" />
              {t('dashboard.edit')}
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => handleDelete(property.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
