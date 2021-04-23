window.addEventListener('DOMContentLoaded', () => {
    //get elems
    const tabLinks = document.querySelectorAll('.about__link'),
          tabLinkWrapper = document.querySelector('.about__links-wrapper'),
          tabContent = document.querySelectorAll('.about__content-item'),
          imgContent = document.querySelectorAll('.about__img'),
          activeLinkClass = 'active-link',
          activeContentClass = 'active-content';

    //show default tab on page load
    showTabsContent();

    
          
    //show tab content
    function showTabsContent(i = 0) {
        tabContent[i].classList.add(activeContentClass);
        tabLinks[i].classList.add(activeLinkClass);
        imgContent[i].classList.add(activeContentClass);
    }

    //hide tabs content
    function hideTabsContent() {
        tabContent.forEach(tab => {
            tab.classList.remove(activeContentClass);
        })
        tabLinks.forEach(link => {
            link.classList.remove(activeLinkClass);
        })
        imgContent.forEach(img => {
            img.classList.remove(activeContentClass);
        })
    }

    //add event listener to parent, using delegation in case we dynamically add more links
    tabLinkWrapper.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('about__link')) {
            tabLinks.forEach((tab,i) => {
                if (target === tab) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            })
        }
    })
})