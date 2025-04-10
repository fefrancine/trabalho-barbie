
const { createApp } = Vue;

createApp({
    data() {
        return {
            cards: [
                {
                    title: 'Barbie Médica',
                    image: "/assets/imagens/bonecas/boneca01.png",
                    description: 'Barbie pronta para salvar vidas com seu jaleco rosa e estetoscópio. Ideal para quem sonha com a medicina!',
                    valor: '89,90',
                    link: "/assets/bonecaCompra.html",
                    inStock: 10

                },
                {
                    title: 'Barbie Engenheira',
                    image: "/assets/imagens/bonecas/boneca02.png",
                    description: 'Com capacete e prancheta, a Barbie Engenheira inspira meninas a construir um mundo melhor com criatividade.',
                    valor: '109,90',
                    link: "/assets/bonecaCompra.html",
                    inStock: 0
                },
                {
                    title: 'Barbie Cantora',
                    image: "/assets/imagens/bonecas/boneca03.jpg",
                    description: 'Brilhando no palco, Barbie Cantora vem com microfone e look incrível para soltar a voz e arrasar nos shows.',
                    valor: '89,90',
                    link: "/assets/bonecaCompra.html",
                    inStock: 3
                },
                {
                    title: 'Barbie Praiana',
                    image: "/assets/imagens/bonecas/boneca04.jpg",
                    description: 'Com roupa de banho estilosa, a Barbie Praiana adora curtir o sol e o mar em dias de verão perfeitos.',
                    valor: '109,90',
                    link: "/assets/bonecaCompra.html",
                    inStock: 5
                },
                {
                    title: 'Barbie de Férias',
                    image: "/assets/imagens/bonecas/boneca05.jpg",
                    description: 'Pronta para viajar, Barbie de Férias vem com acessórios perfeitos para aventuras ao redor do mundo.',
                    valor: '109,90',
                    link: "/assets/bonecaCompra.html",
                    inStock: 8
                },
                {
                    title: 'Barbie Estilista',
                    image: "/assets/imagens/bonecas/boneca06.jpg",
                    description: 'Criativa, cheia de estilo, Barbie Estilista desenha tendências e cria roupas incríveis direto da sua oficina fashion.',
                    valor: '89,90',
                    link: "/assets/bonecaCompra.html",
                    inStock: 2
                },
                {
                    title: 'Barbie de Patins',
                    image: "/assets/imagens/bonecas/boneca07.jpg",
                    description: 'Patinando com muita graça, essa Barbie adora aventuras sobre rodas com estilo e diversão garantida.',
                    valor: '109,90',
                    link: "/assets/bonecaCompra.html",
                    inStock: 10
                },
                {
                    title: 'Barbie Fashionista',
                    image: "/assets/imagens/bonecas/boneca08.jpg",
                    description: 'Barbie Fashionista traz diversidade e beleza com looks modernos que representam todos os estilos e corpos.',
                    valor: '89,90',
                    link: "/assets/bonecaCompra.html",
                    inStock: 10
                },
                {
                    title: 'Barbie Médica',
                    image: "/assets/imagens/bonecas/boneca09.png",
                    description: 'Versão alternativa da Barbie Médica, com jaleco e acessórios para cuidar de todos com carinho e dedicação.',
                    valor: '89,90',
                    link: "/assets/bonecaCompra.html",
                    inStock: 0
                },
                {
                    title: 'Cavalo Barbie',
                    image: "/assets/imagens/bonecas/boneca10.png",
                    description: 'Companheiro de aventuras, o Cavalo da Barbie é ideal para passeios divertidos no campo ou na cidade.',
                    valor: '109,90',
                    link: "/assets/bonecaCompra.html",
                    inStock: 10
                },
                {
                    title: 'Barbie Zoo',
                    image: "/assets/imagens/bonecas/boneca11.png",
                    description: 'Amiga dos animais, Barbie Zoo cuida com amor dos bichinhos e compartilha conhecimento sobre a natureza.',
                    valor: '109,90',
                    link: "/assets/bonecaCompra.html",
                    inStock: 10
                },
                {
                    title: 'Barbie Bombeira',
                    image: "/assets/imagens/bonecas/boneca12.jpg",
                    description: 'Com acessórios de bombeiro, Barbie Bombeira encanta com sua coragem e determinação',
                    valor: '150,00',
                    link: "/assets/bonecaCompra.html",
                    inStock: 3
                },
                {
                    title: 'Princesa Edição Limitada',
                    image: "/assets/imagens/bonecas/boneca13.jpg",
                    description: 'Em edição especial, essa Barbie Princesa brilha com vestido luxuoso. Item raro para colecionadores!',
                    valor: '150,00',
                    link: "/assets/bonecaCompra.html",
                    inStock: 10
                },
                {
                    title: 'Barbie Plus Size',
                    image: "/assets/imagens/bonecas/boneca14.jpg",
                    description: 'Barbie Plus Size celebra a diversidade com estilo e atitude. Modelo exclusivo e limitado!',
                    valor: '150,00',
                    link: "/assets/bonecaCompra.html",
                    inStock: 10
                },
                {
                    title: 'Barbie Grávida',
                    image: "/assets/imagens/bonecas/boneca15.jpg",
                    description: 'Representando o poder da maternidade, Barbie Grávida é uma edição especial e encantadora.',
                    valor: '150,00',
                    link: "/assets/bonecaCompra.html",
                    inStock: 0
                },
                {
                    title: 'Barbie Princesa Negra',
                    image: "/assets/imagens/bonecas/boneca16.png",
                    description: 'Com beleza real, a Barbie Princesa Negra é uma edição limitada que celebra realeza e representatividade.',
                    valor: '150,00',
                    link: "/assets/bonecaCompra.html",
                    inStock: 10
                },
                {
                    title: 'Barbie Princesa',
                    image: "/assets/imagens/bonecas/boneca17.png",
                    description: 'Com coroa e vestido encantador, Barbie Princesa está pronta para viver contos de fadas inesquecíveis.',
                    valor: '89,90',
                    link: "/assets/bonecaCompra.html",
                    inStock: 2
                },
                {
                    title: 'Barbie Rapunzel',
                    image: "/assets/imagens/bonecas/boneca18.png",
                    description: 'Com cabelos longos e mágicos, Barbie Rapunzel é uma edição especial inspirada no clássico conto de fadas.',
                    valor: '150,00',
                    link: "/assets/bonecaCompra.html",
                    inStock: 10
                },
                {
                    title: 'Barbie Princesa e a Plebeia',
                    image: "/assets/imagens/bonecas/boneca19.png",
                    description: 'Inspirada no filme, essa edição limitada traz duas histórias em uma: princesa e plebeia em um só coração.',
                    valor: '150,00',
                    link: "/assets/bonecaCompra.html",
                    inStock: 10
                },
                {
                    title: 'Barbie Fada',
                    image: "/assets/imagens/bonecas/boneca20.png",
                    description: 'Com asas brilhantes e muita magia, Barbie Fada é perfeita para quem ama o mundo encantado das florestas.',
                    valor: '150,00',
                    link: "/assets/bonecaCompra.html",
                    inStock: 10
                },
                {
                    title: 'Barbie Sereia',
                    image: "/assets/imagens/bonecas/boneca21.png",
                    description: 'Do fundo do mar, Barbie Sereia encanta com sua cauda colorida e brilho mágico. Edição limitada!',
                    valor: '150,00',
                    link: "/assets/bonecaCompra.html",
                    inStock: 10
                },
                {
                    title: 'Barbie Bailarina',
                    image: "/assets/imagens/bonecas/boneca22.png",
                    description: 'Uma versão mágica da Barbie Bailarina, com figurino especial e muito brilho. Modelo de colecionador.',
                    valor: '150,00',
                    link: "/assets/bonecaCompra.html",
                    inStock: 10
                },
                {
                    title: 'Barbie Astronauta',
                    image: "/assets/imagens/bonecas/boneca23.jpg",
                    description: 'Barbie Astronauta é uma verdadeira exploradora, pronta para combinar ciência e moda em uma só missão',
                    valor: '150,00',
                    link: "/assets/bonecaCompra.html",
                    inStock: 4
                },
                {
                    title: 'Barbie Professora',
                    image: "/assets/imagens/bonecas/boneca24.jpg",
                    description: 'Barbie Professora é uma verdadeira inspiração para as futuras gerações, com seu amor pelo ensino e aprendizado',
                    valor: '109,90',
                    link: "/assets/bonecaCompra.html",
                    inStock: 10
                },
                {
                    title: 'Barbie Cientista',
                    image: "/assets/imagens/bonecas/boneca25.jpg",
                    description: 'Barbie Cientista é uma verdadeira exploradora do mundo da ciencia, pronta para descobrir novas possibilidades',
                    valor: '109,90',
                    link: "/assets/bonecaCompra.html",
                    inStock: 0
                },
                {
                    title: 'Barbie Escritora',
                    image: "/assets/imagens/bonecas/boneca26.jpg",
                    description: 'Barbie Escritora é uma verdadeira contadora de histórias, pronta para inspirar a imaginação de todos com suas palavras',
                    valor: '',
                    link: "/assets/bonecaCompra.html",
                    inStock: 10
                },
                {
                    title: 'Barbie Cantora',
                    image: "/assets/imagens/bonecas/boneca27.jpg",
                    description: 'Barbie Cantora é uma verdadeira estrela da música, pronta para brilhar nos palcos e conquistar corações com sua voz',
                    valor: '109,90',
                    link: "/assets/bonecaCompra.html",
                    inStock: 10
                },
                {
                    title: 'Barbie Programadora',
                    image: "/assets/imagens/bonecas/boneca28.png",
                    description: 'Barbie Programadora é uma verdadeira artista do design, pronta para criar espaços incríveis e cheios de vida',
                    valor: '150,00',
                    link: "/assets/bonecaCompra.html",
                    inStock: 4
                },
                {
                    title: 'Barbie Surfista',
                    image: "/assets/imagens/bonecas/boneca29.png",
                    description: 'Barbie Surfista é uma verdadeira aventureira do mar, pronta para pegar ondas e viver momentos inesquecíveis na praia',
                    valor: '150,00',
                    link: "/assets/bonecaCompra.html",
                    inStock: 10
                },
                {
                    title: 'Barbie Engenheira de Software',
                    image: "/assets/imagens/bonecas/boneca30.png",
                    description: 'barbie 30',
                    valor: '',
                    link: "/assets/bonecaCompra.html",
                    inStock: 10
                },
                {
                    title: 'Barbie Arquiteta',
                    image: "/assets/imagens/bonecas/boneca31.png",
                    description: 'barbie 31',
                    valor: '',
                    link: "/assets/bonecaCompra.html",
                    inStock: 10
                },
                {
                    title: 'Barbie Arqueóloga',
                    image: "/assets/imagens/bonecas/boneca32.png",
                    description: 'barbie 32',
                    valor: '',
                    link: "/assets/bonecaCompra.html",
                    inStock: 10
                }
            ]
        };
    },
    methods: {
        buttonText(inStock) {
            if (inStock === 0) {
                return "Esgotado";
            } else if (inStock < 5) {
                return "Quase acabando";
            } else {
                return "Comprar";
            }
        }
    }
}).mount('#app');