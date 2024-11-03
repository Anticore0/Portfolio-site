const burgerMenu = document.getElementById('burgerBtn');
const menuNav = document.getElementById('menuNav');

burgerMenu.addEventListener('click', () => {
    menuNav.classList.toggle('show');
})


const navBtn = document.querySelectorAll("#navTabs .nav-link");
const allTabs = document.querySelectorAll("#navPanes .tab-pane");

navBtn.forEach(btn => {
    btn.addEventListener('click', function () {
        const currentBtn = this;
        const tabID = currentBtn.getAttribute("data-target");
        const currentTab = document.getElementById(tabID);

        navBtn.forEach(item => {
            item.classList.remove("active");
        })

        allTabs.forEach(item => {
            item.classList.remove("active");
        })

        currentTab.classList.add("active");
        currentBtn.classList.add("active");
    })
});

