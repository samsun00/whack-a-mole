#!/bin/bash

echo "🔄 Переключаемся на локальный реестр Verdaccio..."

# Проверяем, запущен ли Verdaccio
if ! nc -z localhost 4873 2>/dev/null; then
    echo "⚠️ Verdaccio не запущен! Запустите его командой: verdaccio"
    echo "Или нажмите Enter, чтобы продолжить..."
    read
fi

# Меняем реестр
npm config set registry http://localhost:4873

# Проверяем
echo "✅ Текущий реестр:"
npm config get registry

# Пересобираем зависимости
echo "📦 Переустанавливаем зависимости из локального реестра..."
rm -rf node_modules package-lock.json
npm install

echo "✅ Готово! Теперь вы работаете с Verdaccio"