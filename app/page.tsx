import { delay } from '@/lib/delays';
import { WPLayout } from '@/components/WPLayout';

export default async function HomePage() {
  await delay(3000);

  return (
    <WPLayout>
      <article className="post">
        <div 
          className="featured-image loading-shimmer"
          style={{ 
            width: '100%', 
            height: '300px', 
            background: 'linear-gradient(90deg, #d0d0d0 25%, #c0c0c0 50%, #d0d0d0 75%)',
            backgroundSize: '200% 100%',
            marginBottom: '20px'
          }}
        />
        
        <h2 className="entry-title">
          <a href="#">Welcome to Bella Italia</a>
        </h2>
        
        <div className="entry-meta">
          <span className="posted-on">Posted on <a href="#">January 1, 2024</a></span>
          <span className="byline"> by <a href="#">admin</a></span>
        </div>
        
        <div className="entry-content">
          <p>
            Welcome to our restaurant website! We serve great Italian food.
            This is a placeholder paragraph that would normally have actual 
            information about the restaurant.
          </p>
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            This is what happens when you don&apos;t customize your template.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          
          <p className="read-more">
            <a href="#" className="more-link">Continue reading<span className="screen-reader-text"> &ldquo;Welcome to Bella Italia&rdquo;</span></a>
          </p>
        </div>
        
        <div className="entry-footer">
          <span className="cat-links">Posted in <a href="#">Uncategorized</a></span>
          <span className="comments-link"><a href="#">Leave a comment</a></span>
        </div>
      </article>

      <nav className="navigation post-navigation">
        <h2 className="screen-reader-text">Post navigation</h2>
        <div className="nav-links">
          <div className="nav-previous"><a href="#">Older posts</a></div>
          <div className="nav-next"></div>
        </div>
      </nav>

      <div className="comments-area">
        <h3 className="comments-title">Leave a comment</h3>
        <p className="no-comments">Comments are closed.</p>
      </div>
    </WPLayout>
  );
}
