var seed = 1;

const seed_chars = '123456789QWERTYUIOPASDFGHJKLZXCVBNM';
const magic = [29, 23, 11, 19, 17];

const datasets = {
  '1': ['mathematicians', 'Mathematicians', 'People'],
};

function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function prepare_game(_seed) {
  console.log('Prepare game:', _seed);
  seed = _seed.seed;
  let sorted_items = [];
  for(let i = 0; i < data.length; i++)
    sorted_items.push([random(), i]);
  sorted_items.sort();

  let results = []
  for(let i=0;i<24;i++) {
    results.push(data[sorted_items[i][1]]);
  }

  let a, b;

  while(true) {
    a = Math.floor(24*random());
    b = Math.floor(24*random());
    if(a != b)break;
  }

  return {
    'data': results,
    'player_a': a,
    'player_b': b,
  }
}


function parse_code(_seed) {
  if(!_seed.match(/^[1-9A-Z]{6}$/))
    return null;
  let code = _seed.slice(0, 5), crc = _seed[5];

  if(seed_chars[seed_crc(code) % seed_chars.length] != crc)
    return null;
  let dataset_id = code[0], result = 0;
  for(let i=1;i<5;i++)
    result = seed_chars.length * result + seed_chars.indexOf(_seed[i]);

  return {
    'dataset': datasets[dataset_id][0],
    'seed': result
  };
}

function seed_crc(code) {
  let crc = 0;
  for(let i=0;i<5;i++) {
    crc += magic[i] * seed_chars.indexOf(code[i]);
  }
  return crc;
}

function update_seed() {
  let code = document.getElementById('datasets').value;
  for(let i=0;i<4;i++)
    code += seed_chars[Math.floor(Math.random() * seed_chars.length)];

  crc = seed_crc(code);
  code += seed_chars[crc % seed_chars.length];

  // display seed
  $('#game_seed').text(code);
  $('#game_seed').attr('href', '#'+code);
  local_seed = code;

  return code;
}

function create_game() {
  let list = document.getElementById('datasets');
  let groups = {}
  for(let key in datasets)
    groups[datasets[key][2]] = true

  for(let group in groups) {
    let optgroup = document.createElement('optgroup');
    optgroup.label = group;

    for(let key in datasets)
      if(datasets[key][2] == group) {
        let option = document.createElement('option');
        option.value = key;
        option.innerText = datasets[key][1];
        optgroup.appendChild(option);
      }
    list.appendChild(optgroup);
  }

  let char = '';
  if(document.location.hash)
    char = document.location.hash.slice(1);

  while(true) {
    if(datasets.hasOwnProperty(char)) {
      list.value = char;
      break;
    }
    char = seed_chars[Math.floor(Math.random() * seed_chars.length)];
  }

  update_seed();

  $('#initial').addClass('d-none');
  $('#create_game').removeClass('d-none');
}

function join_game(code) {
  if(code)
    $('#join_seed').val(code);
  $('#initial').toggleClass('d-none');
  $('#join_game').toggleClass('d-none');
}

function start_game(created) {
  let code = created ? local_seed : $('#join_seed').val();

  let _seed = parse_code(code);
  if(_seed == null) {
    alert('invalid seed');
    return;
  }

  let script = document.createElement('script');

  document.getElementById('dataset_styles').href = 'styles/' + _seed['dataset'] + '.css';

  script.src = 'datasets/' + _seed['dataset'] + '.js';
  script.onload = function() {
    let game = prepare_game(_seed);

    $('#create_game').addClass('d-none');
    $('#join_game').addClass('d-none');
    $('#start_game').removeClass('d-none');
    game.firstClick = true;

    show_board(game.data, game.firstClick);

    if(created)
      pid = game.player_a;
    else pid = game.player_b;

    //$('#cell_'+pid).removeClass('btn-primary').addClass('btn-warning text-white');
    //document.getElementById('cell_'+pid).onclick=null;
  }
  document.body.appendChild(script);
}

function show_window(event, url) {
  window.open(url);
  event.stopPropagation();
}

function show_board(items, firstClick) {
  for(let y=0;y<3;y++)
    for(let x=0;x<8;x++){
      let i = 8*y+x;
      let button = document.createElement('button');
      button.className = 'btn btn-primary';
      button.id = 'cell_'+i;
      button.style.backgroundImage = 'url('+items[i].image+')'

      button.innerHTML = '<h4>'+items[i].title+'</h4>' + (items[i].url ? '<button class="btn btn-sm btn-secondary" onclick="show_window(event, \''+items[i].url+'\')">?</button>' : '');
      
      button.onclick = function(event) {
        if(firstClick){
            $(this).removeClass('btn-primary').addClass('btn-warning text-white');
            $(this).onclick=null;
            firstClick = false;
        }
        
        $(this).toggleClass('opaque');
      }

      document.getElementById('board').appendChild(button);
    }
}

let errors = []
function show_all() {
  let html = ['<table>'];
  for(let item of data) {
    html.push('<tr><td>'+item.title+'</td><td><img src="'+item.image+'" style="max-width:300px; max-height:300px" onerror="errors.push(\''+item.title+'\')" /></td></tr>');
  }
  document.body.innerHTML = html.join('');
}

function check_hash() {
  if(document.location.hash) {
    let hash = document.location.hash.slice(1);
    let game = parse_code(hash);
    console.log(hash, game);
    if(game)
      join_game(hash);
  }
}
