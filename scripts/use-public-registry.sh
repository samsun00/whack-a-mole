#!/bin/bash

echo "🔄 Переключаемся на публичный реестр npm..."

# Меняем реестр
npm config set registry https://registry.npmjs.org/

# Проверяем
echo "✅ Текущий реестр:"
npm config get registry

# Пересобираем зависимости
echo "📦 Переустанавливаем зависимости..."
rm -rf node_modules package-lock.json
npm install

echo "✅ Готово! Можно коммитить package-lock.json"