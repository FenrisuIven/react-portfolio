import './Header.css'

export default function Header() {
  return (
    <>
      <header class="main-header">
        <nav class="main-header__nav">
          <ul class="main-header__nav-list">
            <li class="main-header__nav-item"><a href="/">Home</a></li>
            <li class="main-header__nav-item"><a href="/portfolio">Portfolio</a></li>
          </ul>
          <a href="/about-me" class="main-header__icon-div">
            FenrisuIven
            <img src='./placeholder-main-icon.jpg' alt="Placeholder cat icon" class="header__main-icon" />
          </a>
        </nav>
      </header>
    </>
  )
}

/* <img src='./placeholder-main-icon.png' alt="Placeholder cat icon" class="header__main-icon" /> */