export function WPSidebar() {
  return (
    <aside className="sidebar">
      <div className="widget">
        <h3 className="widget-title">Search</h3>
        <form>
          <input type="search" placeholder="Search..." className="search-field" />
          <button type="submit" className="search-submit">Search</button>
        </form>
      </div>

      <div className="widget">
        <h3 className="widget-title">Recent Posts</h3>
        <ul>
          <li><a href="#">Hello world!</a></li>
          <li><a href="#">Sample Page</a></li>
        </ul>
      </div>

      <div className="widget">
        <h3 className="widget-title">Archives</h3>
        <ul>
          <li><a href="#">January 2024</a></li>
        </ul>
      </div>

      <div className="widget">
        <h3 className="widget-title">Categories</h3>
        <ul>
          <li><a href="#">Uncategorized</a></li>
        </ul>
      </div>

      <div className="widget">
        <h3 className="widget-title">Meta</h3>
        <ul>
          <li><a href="#">Site Admin</a></li>
          <li><a href="#">Log out</a></li>
          <li><a href="#">Entries RSS</a></li>
          <li><a href="#">Comments RSS</a></li>
          <li><a href="#">WordPress.org</a></li>
        </ul>
      </div>
    </aside>
  );
}
