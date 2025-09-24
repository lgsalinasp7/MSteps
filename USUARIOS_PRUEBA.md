# 🔐 Usuarios de Prueba - Mastersteps

## 👑 ADMINISTRADORES

### Usuario: `admin`
- **Contraseña**: `admin123`
- **Nombre**: Carlos Rodríguez
- **Organización**: Mastersteps Central
- **Email**: carlos.rodriguez@mastersteps.com

### Usuario: `admin@mastersteps.com`
- **Contraseña**: `admin2024`
- **Nombre**: Ana García
- **Organización**: Mastersteps Central
- **Email**: ana.garcia@mastersteps.com

---

## 📚 MAESTROS/TEACHERS

### Usuario: `maestra.maria`
- **Contraseña**: `maria123`
- **Nombre**: María Elena Vásquez
- **Organización**: Iglesia Central
- **Email**: maria.vasquez@iglesia-central.com

### Usuario: `teacher`
- **Contraseña**: `teacher123`
- **Nombre**: Rosa Isabel Morales
- **Organización**: Iglesia Betania
- **Email**: rosa.morales@iglesia-betania.com

### Usuario: `prof.lucia`
- **Contraseña**: `lucia456`
- **Nombre**: Lucía Fernández
- **Organización**: Iglesia Emanuel
- **Email**: lucia.fernandez@iglesia-emanuel.com

---

## 👨‍👩‍👧‍👦 PADRES/PARENTS

### Usuario: `padre.juan`
- **Contraseña**: `juan123`
- **Nombre**: Juan Carlos Mendoza
- **Organización**: Iglesia Central
- **Email**: juan.mendoza@gmail.com

### Usuario: `parent`
- **Contraseña**: `parent123`
- **Nombre**: Carmen López
- **Organización**: Iglesia Nueva Vida
- **Email**: carmen.lopez@hotmail.com

### Usuario: `mama.sofia`
- **Contraseña**: `sofia789`
- **Nombre**: Sofía Ramírez
- **Organización**: Iglesia El Redentor
- **Email**: sofia.ramirez@yahoo.com

---

## 🎯 Instrucciones de Uso

1. **Selecciona el rol** en la página de login (Admin, Maestro, Padre)
2. **Ingresa las credenciales** de uno de los usuarios arriba
3. **El sistema validará** que el usuario tenga el rol seleccionado
4. **Cada dashboard mostrará** contenido específico para ese rol
5. **El sidebar mostrará** la información real del usuario autenticado

## ⚠️ Validaciones Implementadas

- ✅ **Credenciales incorrectas**: Mensaje de error
- ✅ **Rol incorrecto**: No puedes ingresar como Admin si tu usuario es Padre
- ✅ **Campos vacíos**: Validación de campos requeridos
- ✅ **Información personalizada**: Cada usuario ve su nombre y organización
- ✅ **Dashboards diferenciados**: Contenido específico por rol
