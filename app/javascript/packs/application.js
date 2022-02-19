// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
require("jquery")
import $ from 'jquery'
import 'select2'
import 'select2/dist/css/select2.css'
import "../stylesheets/application.css"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

$(document).ready(function() {
  let ingredients = $('.js-ingredients')
  load_select2(ingredients);
  select_listener(ingredients);
})

function load_select2(ingredients) {
  ingredients.select2({
    width: 100,
    height: 300,
    tags: true,
    createTag: function (params) {
      return {
        id: params.term,
        text: params.term,
        newOption: true
      }
    }
  })
}

function select_listener(ingredients) {
  ingredients.on('change', function() {
    $.ajax({
      method: "GET",
      url: "/recipes",
      data: { ingredients: $(this).val() }
    })
    .done((response) => {
      debugger;
      $('#recipes').html(response)
    });
  })
}
