import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Home, Plus, Settings, FileText, FileCog } from 'lucide-react';
import { DashboardProperties } from '@/components/dashboard/DashboardProperties';
import { DashboardProfile } from '@/components/dashboard/DashboardProfile';
import { DashboardProjects } from '@/components/dashboard/DashboardProjects';
import { DashboardDocuments } from '@/components/dashboard/DashboardDocuments';
import { toast } from 'sonner';

const Dashboard = () => {
  const { t } = useTranslation();
  const { user, loading, signOut } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      toast.error(t('auth.loginRequired'));
      navigate('/auth');
    }
  }, [user, loading, navigate, t]);

  useEffect(() => {
    if (user) {
      supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .eq('role', 'admin')
        .maybeSingle()
        .then(({ data }) => {
          setIsAdmin(!!data);
        });
    }
  }, [user]);

  const handleSignOut = async () => {
    await signOut();
    toast.success(t('auth.logoutSuccess'));
    navigate('/');
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
    </div>;
  }

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-background">
        <div className="container py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">{t('dashboard.title')}</h1>
            <Button variant="outline" onClick={handleSignOut}>
              {t('auth.logout')}
            </Button>
          </div>

          <Tabs defaultValue="properties" className="space-y-6">
            <TabsList className={`grid w-full lg:w-auto ${isAdmin ? 'grid-cols-4' : 'grid-cols-3'}`}>
              <TabsTrigger value="properties" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                {t('dashboard.properties')}
              </TabsTrigger>
              <TabsTrigger value="projects" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                {t('dashboard.projects')}
              </TabsTrigger>
              {isAdmin && (
                <TabsTrigger value="documents" className="flex items-center gap-2">
                  <FileCog className="h-4 w-4" />
                  Документы
                </TabsTrigger>
              )}
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                {t('dashboard.profile')}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="properties" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">{t('dashboard.myProperties')}</h2>
                <Button onClick={() => navigate('/dashboard/add-property')}>
                  <Plus className="h-4 w-4 mr-2" />
                  {t('dashboard.addProperty')}
                </Button>
              </div>
              <DashboardProperties />
            </TabsContent>

            <TabsContent value="projects">
              <DashboardProjects />
            </TabsContent>

            <TabsContent value="profile">
              <DashboardProfile />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
