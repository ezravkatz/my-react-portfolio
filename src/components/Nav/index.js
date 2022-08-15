import React, { useEffect } from 'react';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
    portfolioSelected,
    setPortfolioSelected,
    resumeSelected,
    setResumeSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
              <div><iframe className='gif' src="https://giphy.com/embed/xThtagT1QVZLTzEBO0" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/animation-art-design-xThtagT1QVZLTzEBO0">via GIPHY</a></p>
      <h2 className='title'>
        <a data-testid="link" href="/">
         Ezra Katz, Full Stack Dev
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About Me
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="gallery" href="./Gallery" onClick={() => setResumeSelected(false)}>
              Resume
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {/* <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
            <span onClick={() => setPortfolioSelected(true)}>Portfolio</span>
          </li> */}
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !portfolioSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;