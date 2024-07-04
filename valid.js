
        document.addEventListener('DOMContentLoaded', (event) => {
            const formulario = document.getElementById('personal-data-form');

            formulario.addEventListener('submit', (event) => {
                event.preventDefault(); // Evitar el envío inmediato del formulario

                const nombre = document.getElementById('nombre').value;
                const apellido = document.getElementById('apellido').value;
                const email = document.getElementById('email').value;
                const fechaNacimiento = document.getElementById('fechaNacimiento').value;
                const paisResidencia = document.getElementById('paisResidencia').value;

                // Validaciones
                if (!/^[a-zA-Z ]+$/.test(nombre) || !/^[a-zA-Z ]+$/.test(apellido)) {
                    alert('Nombre y apellido deben contener solo letras y espacios.');
                    return;
                }

                if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
                    alert('Correo electrónico inválido. Debe seguir el formato: nombre@dominio.com');
                    return;
                }

                const fechaNacimientoUsuario = new Date(fechaNacimiento);
                const fechaNacimientoMin = new Date();
                fechaNacimientoMin.setFullYear(fechaNacimientoMin.getFullYear() - 18);
                
                if (fechaNacimientoUsuario > fechaNacimientoMin) {
                    alert('Debes tener al menos 18 años para enviar el formulario.');
                    return;
                }

                if (paisResidencia === '') {
                    alert('Por favor, seleccione un país de residencia.');
                    return;
                }

                // Si todas las validaciones son correctas, se permite el envío del formulario
                formulario.submit();
            });

            // Mostrar botón de Estilo Normal y ocultar Alto Contraste por defecto
            document.getElementById('btn-normal').style.display = 'none';
        });

        function toggleContrast() {
            var standardStyle = document.getElementById('standard-style');
            var highContrastStyle = document.getElementById('high-contrast-style');
            
            standardStyle.disabled = true;
            highContrastStyle.disabled = false;

            // Mostrar botón de Estilo Normal y ocultar Alto Contraste
            document.getElementById('btn-normal').style.display = 'inline-block';
            document.querySelector('button[type="button"]:first-of-type').style.display = 'none';
        }

        function toggleNormal() {
            var standardStyle = document.getElementById('standard-style');
            var highContrastStyle = document.getElementById('high-contrast-style');
            
            standardStyle.disabled = false;
            highContrastStyle.disabled = true;

            // Mostrar botón de Alto Contraste y ocultar Estilo Normal
            document.getElementById('btn-normal').style.display = 'none';
            document.querySelector('button[type="button"]:first-of-type').style.display = 'inline-block';
        }
    



