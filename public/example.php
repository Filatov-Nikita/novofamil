<?php
  $json = file_get_contents('https://novoufim.yes-idea.ru/api/v2/static_pages/5');
  $value = json_decode($json);
  $body = $value->data->body;
?>

<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" href="/favicon.ico"><title>ЖК Новый Фамильный от Агидель-ИнвестСтрой</title><meta name="description" content="ЖК Новый Фамильный от Агидель-ИнвестСтрой. Новый формат комфорта в Зеленой роще."/><meta name="keywords" content="купить, квартира, уфа, жилой, комплекс, новостройка"/><script defer="defer" src="/js/chunk-vendors.7453540c.js"></script><script defer="defer" src="/js/app.8497b259.js"></script><link href="/css/app.de6d115b.css" rel="stylesheet"></head><body><noscript><strong style="color: black">We're sorry but ЖК Новый Фамильный от Агидель-ИнвестСтрой doesn't work properly without JavaScript enabled. Please enable it to continue.</strong></noscript><div id="app"></div><?= $body ?></body></html>
