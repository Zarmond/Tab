const tabHeader = document.querySelectorAll(`.tab-header_item`);
const tabBody = document.querySelectorAll('.tab-body_item');
tabHeader.forEach(item => {
    item.addEventListener('click', e => {
        clearTab();
        item.classList.add('active');
        document.querySelector(item.dataset.target).classList.add('active');
    })
})
function clearTab() {
    tabHeader.forEach(item => {
        item.classList.remove('active');
    })
    tabBody.forEach(item => {
        item.classList.remove('active');
    })
}