import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Image as ImageIcon } from 'lucide-react';
import { toast } from 'sonner';

interface ProjectUpdate {
  id: string;
  project_title: string;
  project_description: string;
  project_image_url: string;
  status: string;
  update_type: string;
  update_title: string;
  update_description: string;
  images: string[];
  created_at: string;
}

export const DashboardProjects = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [updates, setUpdates] = useState<ProjectUpdate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchProjectUpdates();
    }
  }, [user]);

  const fetchProjectUpdates = async () => {
    try {
      const { data, error } = await supabase
        .from('project_updates')
        .select('*')
        .eq('client_user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setUpdates(data || []);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-8">{t('dashboard.loading')}</div>;
  }

  if (updates.length === 0) {
    return (
      <Card>
        <CardContent className="py-8 text-center text-muted-foreground">
          {t('dashboard.noProjects')}
        </CardContent>
      </Card>
    );
  }

  // Group updates by project
  const groupedUpdates = updates.reduce((acc, update) => {
    const key = update.project_title;
    if (!acc[key]) {
      acc[key] = {
        title: update.project_title,
        description: update.project_description,
        image: update.project_image_url,
        status: update.status,
        updates: [],
      };
    }
    acc[key].updates.push(update);
    return acc;
  }, {} as Record<string, any>);

  return (
    <div className="space-y-8">
      {Object.values(groupedUpdates).map((project: any) => (
        <Card key={project.title} className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="flex items-start gap-4">
              {project.image && (
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle>{project.title}</CardTitle>
                  <Badge variant={project.status === 'completed' ? 'default' : 'secondary'}>
                    {t(`dashboard.${project.status}`)}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">{t('dashboard.projectUpdates')}</h3>
            <div className="space-y-4">
              {project.updates.map((update: ProjectUpdate) => (
                <div key={update.id} className="border-l-2 border-primary/20 pl-4 py-2">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {t(`dashboard.${update.update_type}`)}
                      </Badge>
                      <h4 className="font-semibold">{update.update_title}</h4>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {new Date(update.created_at).toLocaleDateString()}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {update.update_description}
                  </p>
                  {update.images && update.images.length > 0 && (
                    <div className="flex gap-2 mt-2">
                      {update.images.map((img, idx) => (
                        <div key={idx} className="w-20 h-20 rounded overflow-hidden">
                          <img
                            src={img}
                            alt={`Update ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
