$(document).ready(function() {
    
    let stats = document.getElementById('controls');
    
    stats.addEventListener('mousedown', function(e) {
        stats.isDown = true;
        stats.offset = [
            stats.offsetLeft - e.clientX,
            stats.offsetTop - e.clientY
        ];
    }, true);
    
    stats.addEventListener('mouseup', function() {
        stats.isDown = false;
    }, true);
    
    stats.addEventListener('mousemove', function(event) {
        event.preventDefault();
        if (stats.isDown) {
            stats.mousePosition = {
    
                x : event.clientX,
                y : event.clientY
    
            };
            stats.style.left = (stats.mousePosition.x + stats.offset[0]) + 'px';
            stats.style.top  = (stats.mousePosition.y + stats.offset[1]) + 'px';
            stats.style.bottom = 'auto';
        }
    }, true);
})
    