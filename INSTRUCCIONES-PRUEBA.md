# 🧪 Instrucciones de Prueba - Zonama

## 📋 Lista de Verificación Completa

### ✅ Prueba 1: Modal de Imagen Completa (Lightbox)

#### Con Mouse
1. [ ] Abre `index.html` en tu navegador
2. [ ] Scroll hasta la sección de productos
3. [ ] Haz clic en "Ver Detalles" de cualquier producto
4. [ ] En el modal, haz clic en la imagen del producto
5. [ ] **Resultado esperado**: La imagen se abre en pantalla completa con fondo oscuro
6. [ ] Haz clic en el botón X para cerrar
7. [ ] **Resultado esperado**: El lightbox se cierra y vuelves al modal de detalles
8. [ ] Abre el lightbox nuevamente
9. [ ] Haz clic fuera de la imagen
10. [ ] **Resultado esperado**: El lightbox se cierra
11. [ ] Abre el lightbox nuevamente
12. [ ] Haz clic en la imagen misma
13. [ ] **Resultado esperado**: El lightbox se cierra

#### Con Teclado
1. [ ] Recarga la página
2. [ ] Presiona `Tab` repetidamente hasta llegar a un producto
3. [ ] Presiona `Enter` en "Ver Detalles"
4. [ ] Presiona `Tab` hasta llegar a la imagen
5. [ ] Presiona `Enter` o `Espacio` en la imagen
6. [ ] **Resultado esperado**: El lightbox se abre
7. [ ] Presiona `ESC`
8. [ ] **Resultado esperado**: El lightbox se cierra

---

### ✅ Prueba 2: Navegación por Teclado

#### Navegación Básica
1. [ ] Recarga la página
2. [ ] Presiona `Tab` desde el inicio
3. [ ] **Resultado esperado**: Ves un outline morado alrededor del elemento con focus
4. [ ] Continúa presionando `Tab`
5. [ ] **Resultado esperado**: El focus se mueve secuencialmente por todos los elementos interactivos
6. [ ] Presiona `Shift + Tab`
7. [ ] **Resultado esperado**: El focus se mueve hacia atrás

#### Navegación en Modales
1. [ ] Presiona `Tab` hasta llegar a "Iniciar Sesión"
2. [ ] Presiona `Enter`
3. [ ] **Resultado esperado**: El modal de login se abre
4. [ ] Presiona `Tab` varias veces
5. [ ] **Resultado esperado**: El focus queda atrapado dentro del modal (no sale)
6. [ ] Presiona `ESC`
7. [ ] **Resultado esperado**: El modal se cierra y el focus vuelve al botón "Iniciar Sesión"

#### Navegación en Productos
1. [ ] Presiona `Tab` hasta llegar a un producto
2. [ ] Presiona `Enter` en la imagen del producto
3. [ ] **Resultado esperado**: Se abre el modal de detalles
4. [ ] Presiona `Tab` hasta "Agregar al Carrito"
5. [ ] Presiona `Enter`
6. [ ] **Resultado esperado**: Aparece notificación "Producto agregado al carrito"

---

### ✅ Prueba 3: Lectores de Pantalla

#### Con NVDA (Windows)
1. [ ] Instala NVDA si no lo tienes: https://www.nvaccess.org/
2. [ ] Inicia NVDA (Ctrl + Alt + N)
3. [ ] Abre `index.html`
4. [ ] Presiona `H` para navegar por headings
5. [ ] **Resultado esperado**: NVDA anuncia cada heading claramente
6. [ ] Presiona `B` para navegar por botones
7. [ ] **Resultado esperado**: NVDA anuncia cada botón con su función
8. [ ] Navega a un producto con las flechas
9. [ ] **Resultado esperado**: NVDA lee el título, precio, calificación y disponibilidad
10. [ ] Activa "Ver Detalles" con Enter
11. [ ] **Resultado esperado**: NVDA anuncia "Detalles del producto, diálogo"

#### Con VoiceOver (Mac)
1. [ ] Activa VoiceOver (Cmd + F5)
2. [ ] Abre `index.html`
3. [ ] Usa VO + Flecha Derecha para navegar
4. [ ] **Resultado esperado**: VoiceOver lee cada elemento claramente
5. [ ] Navega a un producto
6. [ ] **Resultado esperado**: VoiceOver anuncia "Producto: [nombre], artículo"
7. [ ] Activa "Ver Detalles"
8. [ ] **Resultado esperado**: VoiceOver anuncia el modal correctamente

---

### ✅ Prueba 4: Responsive Design

#### Desktop (1920x1080)
1. [ ] Abre en pantalla completa
2. [ ] **Resultado esperado**: 5 columnas de productos
3. [ ] Abre el lightbox
4. [ ] **Resultado esperado**: Imagen grande centrada con espacio alrededor

#### Tablet (768x1024)
1. [ ] Redimensiona la ventana a 768px de ancho
2. [ ] **Resultado esperado**: 3 columnas de productos
3. [ ] Abre el lightbox
4. [ ] **Resultado esperado**: Imagen adaptada al tamaño

#### Mobile (375x667)
1. [ ] Redimensiona a 375px de ancho
2. [ ] **Resultado esperado**: 1 columna de productos
3. [ ] Abre el lightbox
4. [ ] **Resultado esperado**: Imagen optimizada para móvil
5. [ ] Toca fuera de la imagen
6. [ ] **Resultado esperado**: El lightbox se cierra

---

### ✅ Prueba 5: Contraste y Visibilidad

#### Contraste de Colores
1. [ ] Inspecciona el botón "Agregar al Carrito"
2. [ ] Usa una herramienta de contraste (ej: WebAIM Contrast Checker)
3. [ ] **Resultado esperado**: Ratio de contraste ≥ 4.5:1

#### Focus Visible
1. [ ] Navega con Tab por toda la página
2. [ ] **Resultado esperado**: Todos los elementos tienen outline morado visible
3. [ ] Verifica que el outline sea claramente visible en todos los fondos

#### Estados de Botones
1. [ ] Hover sobre un botón
2. [ ] **Resultado esperado**: Cambio visual claro (color, sombra, elevación)
3. [ ] Click en un botón
4. [ ] **Resultado esperado**: Feedback visual inmediato
5. [ ] Encuentra un botón deshabilitado
6. [ ] **Resultado esperado**: Claramente diferenciado (gris, cursor not-allowed)

---

### ✅ Prueba 6: Funcionalidad del Carrito

#### Agregar Productos
1. [ ] Haz clic en "Agregar al Carrito" en un producto
2. [ ] **Resultado esperado**: Notificación verde "Producto agregado al carrito"
3. [ ] **Resultado esperado**: El contador del carrito aumenta
4. [ ] Agrega otro producto
5. [ ] **Resultado esperado**: El contador aumenta nuevamente

#### Ver Carrito
1. [ ] Haz clic en el icono del carrito
2. [ ] **Resultado esperado**: Modal del carrito se abre con los productos
3. [ ] Verifica que los productos agregados estén listados
4. [ ] Haz clic en "+" para aumentar cantidad
5. [ ] **Resultado esperado**: La cantidad aumenta y el total se actualiza
6. [ ] Haz clic en "-" para disminuir cantidad
7. [ ] **Resultado esperado**: La cantidad disminuye y el total se actualiza
8. [ ] Haz clic en el icono de basura
9. [ ] **Resultado esperado**: El producto se elimina del carrito

---

### ✅ Prueba 7: Búsqueda y Filtros

#### Búsqueda
1. [ ] Escribe "laptop" en el campo de búsqueda
2. [ ] Presiona Enter o haz clic en el botón de búsqueda
3. [ ] **Resultado esperado**: Solo se muestran productos que contienen "laptop"
4. [ ] Borra el texto y busca nuevamente
5. [ ] **Resultado esperado**: Se muestran todos los productos

#### Filtros por Tipo
1. [ ] Selecciona "Productos físicos" en el filtro
2. [ ] **Resultado esperado**: Solo se muestran productos físicos
3. [ ] Selecciona "Productos digitales"
4. [ ] **Resultado esperado**: Solo se muestran productos digitales
5. [ ] Selecciona "Todos los productos"
6. [ ] **Resultado esperado**: Se muestran todos los productos

#### Filtros por Categoría
1. [ ] Haz clic en la categoría "Electrónicos"
2. [ ] **Resultado esperado**: Solo se muestran productos electrónicos
3. [ ] Haz clic en "Libros"
4. [ ] **Resultado esperado**: Solo se muestran libros

---

### ✅ Prueba 8: Modales y Formularios

#### Modal de Login
1. [ ] Haz clic en "Iniciar Sesión"
2. [ ] **Resultado esperado**: Modal se abre
3. [ ] Completa el formulario con datos de prueba
4. [ ] Haz clic en "Iniciar Sesión"
5. [ ] **Resultado esperado**: Notificación de éxito y el botón cambia a "Hola, [nombre]"

#### Modal de Registro
1. [ ] Haz clic en "Iniciar Sesión"
2. [ ] Haz clic en la pestaña "Crear Cuenta"
3. [ ] Completa el formulario
4. [ ] Haz clic en "Crear Cuenta"
5. [ ] **Resultado esperado**: Notificación de éxito

#### Modal de Vendedor
1. [ ] Haz clic en "Vender en Zonama"
2. [ ] **Resultado esperado**: Modal con planes se abre
3. [ ] Revisa los tres planes (Básico, Profesional, Empresarial)
4. [ ] Haz clic en "Comenzar Gratis"
5. [ ] **Resultado esperado**: Notificación de bienvenida

---

### ✅ Prueba 9: Animaciones y Transiciones

#### Animaciones Suaves
1. [ ] Abre cualquier modal
2. [ ] **Resultado esperado**: Animación suave de fade-in y slide-in
3. [ ] Cierra el modal
4. [ ] **Resultado esperado**: Animación suave de fade-out

#### Hover Effects
1. [ ] Pasa el mouse sobre un producto
2. [ ] **Resultado esperado**: El producto se eleva ligeramente con sombra
3. [ ] Pasa el mouse sobre un botón
4. [ ] **Resultado esperado**: Cambio de color suave

#### Lightbox Animation
1. [ ] Abre el lightbox
2. [ ] **Resultado esperado**: Zoom-in suave de la imagen
3. [ ] Cierra el lightbox
4. [ ] **Resultado esperado**: Fade-out suave

---

### ✅ Prueba 10: Compatibilidad de Navegadores

#### Chrome
1. [ ] Abre en Chrome
2. [ ] Ejecuta todas las pruebas anteriores
3. [ ] **Resultado esperado**: Todo funciona correctamente

#### Firefox
1. [ ] Abre en Firefox
2. [ ] Ejecuta todas las pruebas anteriores
3. [ ] **Resultado esperado**: Todo funciona correctamente

#### Safari
1. [ ] Abre en Safari
2. [ ] Ejecuta todas las pruebas anteriores
3. [ ] **Resultado esperado**: Todo funciona correctamente

#### Edge
1. [ ] Abre en Edge
2. [ ] Ejecuta todas las pruebas anteriores
3. [ ] **Resultado esperado**: Todo funciona correctamente

---

## 🐛 Reporte de Bugs

Si encuentras algún problema, documéntalo así:

```
### Bug: [Título descriptivo]

**Pasos para reproducir:**
1. Paso 1
2. Paso 2
3. Paso 3

**Resultado esperado:**
[Qué debería pasar]

**Resultado actual:**
[Qué está pasando]

**Navegador:** [Chrome/Firefox/Safari/Edge]
**Versión:** [Versión del navegador]
**Sistema Operativo:** [Windows/Mac/Linux]
**Dispositivo:** [Desktop/Tablet/Mobile]

**Capturas de pantalla:**
[Si es posible, adjunta capturas]
```

---

## ✅ Checklist Final

Marca cada item cuando lo hayas probado exitosamente:

### Funcionalidad
- [ ] Lightbox se abre correctamente
- [ ] Lightbox se cierra con todos los métodos
- [ ] Navegación por teclado funciona
- [ ] Lectores de pantalla funcionan
- [ ] Carrito funciona correctamente
- [ ] Búsqueda funciona
- [ ] Filtros funcionan
- [ ] Modales funcionan

### Accesibilidad
- [ ] Focus visible en todos los elementos
- [ ] ARIA labels correctos
- [ ] Navegación por teclado completa
- [ ] Lectores de pantalla compatibles
- [ ] Contraste adecuado
- [ ] Trap focus en modales

### Responsive
- [ ] Desktop (1920x1080)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

### Navegadores
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

---

## 📊 Resultados

### Resumen de Pruebas
```
Total de pruebas: ___
Exitosas: ___
Fallidas: ___
Pendientes: ___

Porcentaje de éxito: ___%
```

### Notas Adicionales
```
[Agrega cualquier observación o comentario aquí]
```

---

## 📞 Soporte

Si necesitas ayuda con las pruebas:
- 📧 Email: dev@zonama.sv
- 💬 Slack: #zonama-testing
- 📱 WhatsApp: +503 XXXX-XXXX

---

**¡Gracias por probar Zonama! 🇸🇻**
