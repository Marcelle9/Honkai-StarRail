document.addEventListener("DOMContentLoaded", () => {
    const imagens = document.querySelectorAll(".imagem");
    const modal = document.getElementById("modal");
    const modalConteudo = document.getElementById("img-detalhes");
    const fechar = document.querySelector(".fechar");
    const searchBar = document.getElementById("search-bar");
    const cards = document.querySelectorAll(".card");

    // nção para abrir o modal com a imagem detalhada
    imagens.forEach(imagem => {
        imagem.addEventListener("click", () => {
            const id = imagem.id;
            let src = "c";
            switch (id) {
                case "c1":
                    src = "detalhes_personagem/Trailblazer3.png";
                    break;
                case "c2":
                    src = "detalhes_personagem/Boothill.png";
                    break;
                case "c3":
                    src = "detalhes_personagem/Robin.png";
                    break;
                case "c4":
                    src = "detalhes_personagem/Gallagher.png";
                    break;
                case "c5":
                    src = "detalhes_personagem/Aventurine.png";
                    break;
                case "c6":
                    src = "detalhes_personagem/Acheron.png";
                    break;
                    case "c7":
                    src = "detalhes_personagem/Sparkle.png";
                    break;
                    case "c8":
                    src = "detalhes_personagem/BlackSwan.png";
                    break;
                    case "c9":
                    src = "detalhes_personagem/Misha.png";
                    break;
                    case "c10":
                    src = "detalhes_personagem/XueYi.png";
                    break;
                    case "c11":
                    src = "detalhes_personagem/DrRatio.png";
                    break;
                    case "c12":
                    src = "detalhes_personagem/RuanMei.png";
                    break;
                    case "c13":
                    src = "detalhes_personagem/HuoHuo.png";
                    break;
                    case "c14":
                    src = "detalhes_personagem/Hanya.png";
                    break;
                    case "c15":
                    src = "detalhes_personagem/Argenti.png";
                    break;
                    case "c16":
                    src = "detalhes_personagem/Guinaifen.png";
                    break;
                    case "c17":
                    src = "detalhes_personagem/Jingliu.png";
                    break;
                    case "c18":
                    src = "detalhes_personagem/Topaz.png";
                    break;
                    case "c19":
                    src = "detalhes_personagem/Lnyx.png";
                    break;
                    case "c20":
                    src = "detalhes_personagem/Imbibitor.png";
                    break;
                    case "c21":
                    src = "detalhes_personagem/FuXuan.png";
                    break;
                    case "c22":
                    src = "detalhes_personagem/Luka.png";
                    break;
                    case "c23":
                    src = "detalhes_personagem/Yukong.png";
                    break;
                    case "c24":
                    src = "detalhes_personagem/Tingyun.png";
                    break;
                    case "c25":
                    src = "detalhes_personagem/Luocha.png";
                    break;
                    case "c26":
                    src = "detalhes_personagem/Sushang.png";
                    break;
                    case "c27":
                    src = "detalhes_personagem/Blade.png";
                    break;
                    case "c28":
                    src = "detalhes_personagem/Qingque.png";
                    break;
                    case "c29":
                    src = "detalhes_personagem/Pela.png";
                    break;
                    case "c30":
                    src = "detalhes_personagem/Natasha.png";
                    break;
                    case "c31":
                    src = "detalhes_personagem/Hook.png";
                    break;
                    case "c32":
                    src = "detalhes_personagem/Sampo.png";
                    break;
                    case "c33":
                    src = "detalhes_personagem/Trailblazer2.png";
                    break;
                    case "c34":
                    src = "detalhes_personagem/Trailblazer1.png";
                    break;
                    case "c35":
                    src = "detalhes_personagem/March.png";
                    break;
                    case "c36":
                    src = "detalhes_personagem/Herta.png";
                    break;
                    case "c37":
                    src = "detalhes_personagem/Arlan.png";
                    break;
                    case "c38":
                    src = "detalhes_personagem/Gepard.png";
                    break;
                    case "c39":
                    src = "detalhes_personagem/Seele.png";
                    break;
                    case "c40":
                    src = "detalhes_personagem/Kafka.png";
                    break;
                    case "c41":
                    src = "detalhes_personagem/Welt.png";
                    break;
                    case "c42":
                    src = "detalhes_personagem/Himeko.png";
                    break;
                    case "c43":
                    src = "detalhes_personagem/SilverWolf.png";
                    break;
                    case "c44":
                    src = "detalhes_personagem/Yanqing.png";
                    break;
                    case "c45":
                    src = "detalhes_personagem/Bailu.png";
                    break;
                    case "c46":
                    src = "detalhes_personagem/Serval.png";
                    break;
                    case "c47":
                    src = "detalhes_personagem/JingYuan.png";
                    break;
                    case "c48":
                    src = "detalhes_personagem/DanHeng.png";
                    break;
                    case "c49":
                    src = "detalhes_personagem/Clara.png";
                    break;
                    case "c50":
                    src = "detalhes_personagem/Asta.png";
                    break;
                    case "c51":
                    src = "detalhes_personagem/Bronya.png";
                    break;
                    case "c52":
                    src = "detalhes_personagem/FireFly.png";
                    break;
                default:
                    src = "";
            }
            modalConteudo.setAttribute("src", src);
            modal.style.display = "flex";
        });
    });

    // Função para fechar o modal
    fechar.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Função para filtrar as imagens
    searchBar.addEventListener("input", () => {
        const searchTerm = searchBar.value.toLowerCase();
        cards.forEach(card => {
            const altText = card.querySelector(".imagem").alt.toLowerCase();
            if (altText.includes(searchTerm)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});