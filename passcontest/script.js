window.addEventListener('load', function() {

    // Initialize the Loading visualizer
    let loader = new lv();
    loader.initLoaderAll();
    loader.startObserving(); 
});

function createLv(element) {
    const placeholder = document.createElement('div');
          placeholder.insertAdjacentHTML('beforeend', '<div class="lv-dots tiny lv-right"></div>');
    const visualizer = placeholder.firstElementChild;
          element.appendChild(visualizer)
    let spinner = typeof lv !== 'undefined' ? lv.create(visualizer) : null;
    return spinner
}