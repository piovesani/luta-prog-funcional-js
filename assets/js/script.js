const char = createKnight('Renan');
const monster = createLittleMonster();

stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);



