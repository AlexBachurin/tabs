window.addEventListener('DOMContentLoaded', () => {
    //get elems
    const tabLinks = document.querySelectorAll('.about__link'),
          tabLinkWrapper = document.querySelector('.about__links-wrapper'),
          tabContent = document.querySelectorAll('.about__content-item'),
          activeLinkClass = 'active-link',
          activeContentClass = 'active-content';
          
    //show tab content
    function showTabsContent(i) {
        tabContent[i].classList.add(activeContentClass);
        tabLinks[i].classList.add(activeLinkClass);
    }

    //hide tabs content
    function hideTabsContent() {
        tabContent.forEach(tab => {
            tab.classList.remove(activeContentClass);
        })
        tabLinks.forEach(link => {
            link.classList.remove(activeLinkClass);
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