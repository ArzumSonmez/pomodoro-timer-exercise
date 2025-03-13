import { drawBorder } from "./border.js"; 

export function loadTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark-mode', theme === 'dark');

    drawBorder();
    
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');  
    } else {
        document.body.classList.remove('dark-mode');
    }
    drawBorder(); // Update border when theme changes
}