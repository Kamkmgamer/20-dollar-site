export function WPHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <h1 className="site-title">
          <a href="/">Bella Italia</a>
        </h1>
        <p className="site-description">Just another WordPress site</p>
      </div>
      <nav className="main-navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#">Sample Page</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
