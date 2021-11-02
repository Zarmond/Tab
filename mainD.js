let tabs = [
    {
        header: 'Styx: master of shadows',
        body: 'styx',
        target: 'tab-1',
    },
    {
        header: 'Hollow knight',
        body: 'hollow_knight',
        target: 'tab-2',
    },
    {
        header: 'Monster hunter world: iceborn',
        body: 'monster_hunter',
        target: 'tab-3',
    },
    {
        header: 'TES V: Skyrim',
        body: 'TES_V',
        target: 'tab-3',
    }
];
const tabHeader = document.querySelector('.sidebar');
const tabBody = document.querySelector('.body');


tabs.forEach(item => {
    let divSidebar = createElement('div', ['tab-sidebar_item'],);
    divSidebar.dataset.target = item.target;
    divSidebar.addEventListener('click', tabClick)

    let divBody = createElement('div', ['tab-body_item'], `<p>${item.body}</p>`);
    divBody.id = item.target;

    tabHeader.append(divSidebar);
    tabBody.append(divBody);
})

function createElement(el, [...classes], value) {
    let element = document.createElement(el);
    element.classList.add([...classes]);
    element.innerHTML = value;
}

start();
function start() {
    tabHeader.firstChild.classList.add('active');
    tabBody.firstChild.classList.add('active');
}

function tabClick(e) {
    clearTab();
    let currentHeader = e.currentTarget;
    currentHeader.classList.add('active');
    document.querySelector(`#${currentHeader.dataset.target}`).classList.add('active')
}
function clearTab() {
    [...tabHeader.children].forEach(item => item.classList.remove('active'));
    [...tabBody.children].forEach(item => item.classList.remove('active'));
}