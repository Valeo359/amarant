document.addEventListener('DOMContentLoaded', function(){
    const themeButton = document.querySelector('.theme-switch input');
    if(themeButton){
        themeButton.addEventListener('click', function(){
            if(this.checked){
                applyTheme('dark');
            } else {
                applyTheme('light')
            }
        })
        
        function applyTheme(themeName) {
            document.querySelector('[title="theme"]').setAttribute('href', `./css/${themeName}-theme.min.css`);
            localStorage.setItem('theme', themeName);
        }
    
        let activeTheme = localStorage.getItem('theme');
    
        if(activeTheme === null || activeTheme === 'light') {
            applyTheme('light');
        } else if (activeTheme === 'dark') {
            applyTheme('dark');
            themeButton.checked = 'checked';
        }
    }
})