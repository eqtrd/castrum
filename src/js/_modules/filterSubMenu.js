
export const FilterSubMenu = () => {

    const filterSubMenu = document.querySelector('.filter-submenu');
    const filterItems = filterSubMenu.querySelectorAll('li a');
    let activeCategories = [];

    filterItems.forEach(item => {
        item.addEventListener('click', function (e) {
            activeCategories = [];
            e.preventDefault();
            item.classList.toggle('active');

            filterItems.forEach(item =>{
               if(item.classList.contains('active')){
                   activeCategories.push(item.dataset.target);
               }
            });

            if (activeCategories.length === 0) {
                filterItems.forEach(item => item.classList.add('active'));
                filterItems.forEach(item => {
                    activeCategories.push(item.dataset.target);
                });
            }

            filterArticles(activeCategories);
            console.log(activeCategories)
        });
    });


    const filterArticles = (activeCategories) =>{

        const articles = document.querySelectorAll('.item-table-item');
        articles.forEach(article => {
            const articleCategory = article.dataset.category;
            if (activeCategories.includes(articleCategory)) {
                article.style.display = "block"
            }else{
                article.style.display = "none";
            }
        });

    }

}