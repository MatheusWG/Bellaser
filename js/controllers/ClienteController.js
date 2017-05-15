'use strict';
var app = angular.module('app');
app.controller('ClienteController', ClienteController);

function ClienteController() {
    var vm = this;

    vm.pessoa = {};
    novaPessoa();
    vm.telefones = [];
    vm.telefone = {};
    vm.emails = [];
    vm.email = {};
    vm.pessoas = [];

    vm.removerPessoa = function (pessoa) {
        vm.pessoas.splice((vm.pessoas.indexOf(pessoa)), 1);
    }

    vm.removerEmail = function (email) {
        vm.pessoas.emails.splice((vm.pessoas.emails.indexOf(email)), 1);
    }

    vm.removerTelefone = function (telefone) {
        vm.pessoas.telefones.splice((vm.pessoas.telefones.indexOf(telefone)), 1);
    }

    vm.cadastrarTelefone = function () {
        vm.pessoa.telefones.push(vm.pessoa.telefone);
    }

    vm.cadastrarEmail = function () {
        vm.pessoa.emails.push(vm.pessoa.email);
    }

    function cadastrarEmail(){
        vm.pessoa.emails.push(vm.pessoa.email);
    }

    function cadastrarTelefone(){
        vm.pessoa.telefones.push(vm.pessoa.telefone);
    }

    vm.cadastrar = function () {
        vm.pessoas.push(vm.pessoa);
        cadastrarTelefone();
        cadastrarEmail();
        novaPessoa();
    }



    function novaPessoa() {
        vm.pessoa = {
            id: null,
            nome: "",
            sobrenome: "",
            idade: null,
            emails: [],
            telefones: [],
            email: "",
            telefone: ""
        }

    }
}