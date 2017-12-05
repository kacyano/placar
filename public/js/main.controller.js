(function() {
    'use strict';
    
      angular
        .module('app', [])
        .controller('MainController', MainController);
    
      function MainController() {
        var vm = this;
        vm.registros = [];
        vm.registro = null;

        vm.remover = remover;
        vm.adicionar = adicionar;
        vm.addPoints = addPoints;
        vm.subtPoints = subtPoints;
    
        activate();
    
        ////////////////
    
        function activate() { }
    
        function adicionar(novo) {
            if (novo) {
                vm.registro.points = 0;
                vm.registros.push(novo);
                vm.registro = null;
            }    
        }

        function addPoints(index) {
            var reg = vm.registros[index];
            vm.registros[index] = {nome : reg.nome, points : reg.points + 1};
        }

        function subtPoints(index) {
            var reg = vm.registros[index];
            if (reg.points > 0) {
                vm.registros[index] = {nome : reg.nome, points : reg.points - 1};
            }
        }            
    
        function remover(index) {
          if (!confirm('Deseja realmente excluir?'))
            return;
         vm.registros.splice(index, 1);
        }
      }
    })();