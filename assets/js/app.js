jQuery(function($){

	$('.quest-title').on('click', function(){
		var divChar = $(this).parent().parent();
		var questsByChar = $(divChar).find('.quest');
		var questName = $(this).html();



		$(questsByChar).each(function(){
			var currentQuestName = $($(this).children()[0]);
			var currentQuestData = $($(this).children()[1]);

			if ($(currentQuestName).html() != questName) {
				if( $(currentQuestData).css('display') == 'block' ) {
					$(currentQuestData).toggle('show');
				}
			}
		});


		$(this).next().toggle('hide');
	});

	$('th a').on('click', function(e){
		e.preventDefault();
		var id = $(this).attr('href').substr(1);
		var $divChar = $('#'+id);
		var $titleQuests = $('#quests-title');

		var char = {
			'ackman' : 'Ackman',
            'baddack': 'Baddack',
            'baddacktb' : 'Baddack [Time Breaker]',
            'bills' : 'Bills',
			'bojack' : 'Bojack',
			'boo' : 'Boo',
			'boopetit' : 'Boo Petit',
			'bora' : 'Bora',
			'broly' : 'Broly',
			'bulma' : 'Bulma',
			'c17' : 'C-17',
			'c17gt' : 'C-17 (GT)',
			'c18' : 'C-18', 
			'cell' : 'Cell',
			'blue' : 'Commandant Blue',
			'cooler' : 'Cooler',
			'dabra' : 'Dabra',
			'demigra' : 'Démigra',
			'dende' : 'Dendé',
			'dodoria' : 'Dodoria',
			'fermer' : 'Fermier',
			'freezer' : 'Freezer',
			'Garlic' : 'Garlic',
			'ginyu' : 'Ginue',
			'guldo' : 'Guldo', 
			'jaco' : 'Jaco',
			'janemba' : 'Janemba',
			'kaioshin' : 'Kaioshin',
			'kibito' : 'Kibito',
			'krillin' : 'Krillin',
			'krillinp' : 'Krillin Petit',
			'lamp' : 'Lamp',
			'lanfan' : 'Lanfan',
			'monaka' : 'Monaka',
			'nail' : 'Nail',
			'nappa' : 'Nappa',
			'oobgt' : 'Oob (GT)',
			'oolong' : 'Oolong',
			'paikuhan' : 'Païkuhan', 
			'pan' : 'Pan',
			'paragus' : 'Paragus',
			'piccolo' : 'Piccolo',
			'raditz' : 'Raditz',
			'recoome' : 'Recoome',
			'roivegeta' : 'Roi Végéta',
			'sangohanpapy' : 'Sangohan (Papy)',
			'sangohanado' : 'Sangohan Ado',
			'sangohanadulte' : 'Sangohan Adulte',
			'sangohanadultegt' : 'Sangohan Adulte (GT)',
			'sangohanpetit' : 'Sangohan Petit',
			'sangoku' : 'Sangoku',
			'sangokupetit' : 'Sangoku Petit',
			'sangoten' : 'Sangoten',
			'sangotenado' : 'Sangoten Ado',
			'satan' : 'Satan',
			'taopaipai' : 'Taopaïpaï',
			'tapion' : 'Tapion',
			'tarble' : 'Tarble',
			'tenshinhan' : 'Tenshinhan',
			'thales' : 'Thalès',
			'toma' : 'Toma',
			'tortuegeniale' : 'Tortue Géniale',
			'trunksxeno' : 'Trunks (Xenoverse)',
			'trunksdufutur' : 'Trunks du Futur',
			'trunkspetit' : 'Trunks Petit',
			'vasha' : 'Vasha',
			'vegeta' : 'Vegeta',
			'videl' : 'Videl',
			'whis': 'Whis',
			'yamcha' : 'Yamcha',
			'yamchaado' : 'Yamcha Ado'
		};


		$('#quests').find('div').each(function() {
			if($(this).attr('id') != null) {
				var currentId = $(this).attr('id');
				if (currentId != id) {
					if( $('#'+currentId).css('display') == 'block' ) {
						$('#'+currentId).toggle('show');
					}
				}
			}
		});

		var count = $($divChar).find('.quest').length;
		var s = (count > 1) ? 's' : '';

		var charName = $(this).children().attr('class');

		var voyelle = [
			'A', 'E', 'I', 'O', 'U'
		];

		var de = function(){
			if (jQuery.inArray(char[charName][0], voyelle) == '-1') {
				return 'de ';
			} else {
				return 'd\'';
			}
		};

		var titleContent = 'Quête'+s+' '+de();
		titleContent += char[charName];
		
		$($titleQuests).html(titleContent);
		$('#quests').show();
		$('#'+id).toggle('show');

		$('html, body').animate({
			scrollTop: $('#'+id).offset().top
		}, 2000);
	});


});