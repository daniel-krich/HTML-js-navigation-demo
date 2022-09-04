(function() {
    
    class Article {
        constructor(title, content) {
            this.title = title;
            this.content = content;
            this.active = false;
            this.$element = null;
        }
    
        toggleActive() {
            this.$element.classList.toggle('active');
            this.active = !this.active;
    
            if(this.active) {
                this.pageContentTitle = this.title;
                this.pageContentBody = this.content;
            }
        }
    
        get pageContentTitle() {
            const $content_title = document.getElementById('content-title');
            return $content_title.innerText;
        }
    
        set pageContentTitle(title) {
            const $content_title = document.getElementById('content-title');
            $content_title.innerText = title;
        }
    
        get pageContentBody() {
            const $content_body = document.getElementById('content-body');
            return $content_body.innerHTML;
        }
    
        set pageContentBody(title) {
            const $content_body = document.getElementById('content-body');
            $content_body.innerHTML = title;
        }
    }
    
    class ContentNavigation {
        #activeArticle = null;
        constructor() {
            this.articles = [
                new Article("The flight", `
                    <h1 class="text-center mt-3 mb-3">Chania airport</h1>
                        
                    <hr class="mt-4 mb-4">
    
                    <h5 class="ms-3">
                        The airport can be easily reached by car, bus or taxi via the main road network. The city of Chania is about 22 minutes' drive away. in 2022 the bus fare is €3.20 and the supposed flat-rate taxi fare is €23.
                    </h5>
                `),
                new Article("The city", `
                    <h1 class="text-center mt-3 mb-3">Chania city</h1>
                        
                    <hr class="mt-4 mb-4">
    
                    <h5 class="ms-3">
                        Chania is a city in Greece and the capital of the Chania regional unit. It lies along the north west coast of the island Crete, about 70 km west of Rethymno and 145 km west of Heraklion.
                    </h5>
                `),
                new Article("The island", `
                    <h1 class="text-center mt-3 mb-3">Crete island</h1>
                        
                    <hr class="mt-4 mb-4">
    
                    <h5 class="ms-3">
                        Crete is the largest and most populous of the Greek islands, the 88th largest island in the world and the fifth largest island in the Mediterranean Sea, after Sicily, Sardinia, Cyprus, and Corsica.
                        Crete rests about 160 km south of the Greek mainland, and about 100 km southwest of Anatolia.
                    </h5>
                `),
                new Article("The food", `
                    <h1 class="text-center mt-3 mb-3">What food is Chania known for?</h1>
                    
                    <hr class="mt-4 mb-4">
    
                    <h4 class="mb-3">Bougatsa: A must-try on your vacation in Chania.</h6>
                    
                    <h6 class="ms-3 text-mute">A very common Cretan delicacy is “Bougatsa Chanion”, a pie with traditional Cretan cheese called mizithra.</h6>
                    <h6 class="ms-3 text-mute">This particular product can be found in only two special shops in the Chania center, and in very close distance from Agora (Market) square.</h6>
                `),
            ];
    
            this.navigationTitle = 'Chania';
    
            this.initializeNavigation();
        }
    
        get navigationTitle() {
            const $nav_title = document.getElementById('navigation-name');
            return $nav_title.innerText;
        }
    
        set navigationTitle(title) {
            const $nav_title = document.getElementById('navigation-name');
            $nav_title.innerText = title;
        }
    
        initializeNavigation() {
            const $article_list = document.getElementById('sidebar-item-list');
            this.articles.forEach((x, index) => {
    
                const $listItem = document.createElement('li');
                $listItem.addEventListener('click', (_) => this.onListItemClick(x));
                x.$element = $listItem;
    
                $listItem.innerHTML = `
                    <i class="fa-solid fa-bookmark"></i>
                    <span>${x.title}</span>
                `;
    
                $article_list.appendChild($listItem);
    
                if(!index) {
                    x.toggleActive();
                    this.#activeArticle = x;
                }
    
            });
        }
    
        onListItemClick(article) {
            this.#activeArticle?.toggleActive();
            this.#activeArticle = article;
            this.#activeArticle?.toggleActive();
        }
    }
    
    let nav = new ContentNavigation();

})();