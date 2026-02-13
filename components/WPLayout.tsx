import { WPAdminBar } from './WPAdminBar';
import { WPHeader } from './WPHeader';
import { WPSidebar } from './WPSidebar';
import { WPFooter } from './WPFooter';

interface WPLayoutProps {
  children: React.ReactNode;
}

export function WPLayout({ children }: WPLayoutProps) {
  return (
    <div className="wordpress-wrapper">
      <WPAdminBar />
      
      <div className="site-container">
        <WPHeader />
        
        <div className="content-wrapper">
          <main className="main-content">
            {children}
          </main>
          
          <WPSidebar />
        </div>
        
        <WPFooter />
      </div>
    </div>
  );
}
