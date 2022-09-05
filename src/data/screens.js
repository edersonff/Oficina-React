const screens = [
    {title: 'Home', route: '/'},
    {title: 'Onde fica?', route: '/onde-fica'},
    {title: 'Entre em Contato', route: '/contato', 
        sub: [
            {title: 'Redes sociais', route: '/redes-sociais'},
            {title: 'Horário Atendimento', route: '/horario-atendimento'},
        ]
    },
    {title: 'Sobre', route: '/sobre'},
];
export default screens;