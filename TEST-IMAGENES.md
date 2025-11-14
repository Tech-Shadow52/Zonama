# Prueba de Sistema de Carga de Imágenes

## Pasos para Probar

### 1. Registrarse como Vendedor
1. Haz clic en "Vender en Zonama" (botón morado en el header)
2. Completa el formulario de registro
3. Selecciona un plan (puedes usar el gratuito)

### 2. Abrir el Formulario de Agregar Producto
1. Una vez registrado, se abrirá el dashboard
2. Haz clic en "Agregar Producto"
3. Deberías ver el formulario con dos pestañas para imágenes

### 3. Probar Carga de Archivo Local
1. Haz clic en la pestaña "Subir archivo" (debería estar activa por defecto)
2. Haz clic en el área de carga o arrastra una imagen
3. Deberías ver una vista previa de la imagen
4. Puedes hacer clic en "Cambiar imagen" para seleccionar otra

### 4. Probar URL de Imagen
1. Haz clic en la pestaña "URL de imagen"
2. Pega una URL de imagen (ejemplo: https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400)
3. Haz clic en "Vista previa"
4. Deberías ver la imagen cargada

### 5. Guardar Producto
1. Completa el resto del formulario
2. Haz clic en "Publicar Producto"
3. El producto debería aparecer en tu dashboard y en la página principal

## Posibles Problemas

### Si no ves las pestañas de imagen:
- Verifica que estés en el modal correcto (Agregar Producto)
- Abre la consola del navegador (F12) y busca errores

### Si no funciona el drag & drop:
- Intenta hacer clic en el área de carga en su lugar
- Verifica que el archivo sea una imagen (JPG, PNG, GIF)

### Si la vista previa no aparece:
- Verifica que la imagen sea menor a 5MB
- Para URLs, verifica que la URL sea válida y accesible

## Verificación en Consola

Abre la consola del navegador (F12) y ejecuta:
```javascript
// Verificar que app existe
console.log(app);

// Verificar funciones de imagen
console.log(typeof app.switchImageTab);
console.log(typeof app.handleFileSelect);
console.log(typeof app.previewUrlImage);
```

Todas deberían retornar "function"

## URLs de Prueba

Puedes usar estas URLs para probar:
- https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400
- https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400
- https://images.unsplash.com/photo-1542272604-787c3835535d?w=400
