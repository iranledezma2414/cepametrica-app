# 🍄 Cepamétrica: Ingeniería en cada espora.

![Nuxt 3](https://img.shields.io/badge/Nuxt_3-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82)
![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![C++](https://img.shields.io/badge/C++_IoT-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white)

> **Sistema ciberfísico para el monitoreo y control paramétrico en la valorización nutricional de biomasa fúngica (Pleurotus ostreatus).**

## 🌐 Visión General (Modelo B2B)
**Cepamétrica** no es una empresa de agricultura tradicional; es una startup **AgroTech / FoodTech**. Desarrollamos y estandarizamos biomasa de alto valor proteico mediante el control estricto de variables térmicas y ambientales. 

Nuestro producto final es un ingrediente funcional deshidratado, respaldado por telemetría exacta, diseñado para integrarse en las cadenas de suministro de la industria alimentaria corporativa (B2B). *(Nota: Nuestro prototipo actual de validación utiliza una matriz de maíz -tortilla- como Prueba de Concepto).*

---

## ⚙️ Arquitectura del Sistema (Fase 1 - MVP Local)
El proyecto opera bajo una arquitectura desconectada para garantizar la resiliencia en entornos de cultivo agrícola, dividida en tres capas principales:

### 1. Capa Biológica (Bioprocesos)
* Inoculación y control del micelio de *Pleurotus ostreatus*.
* Gestión de curvas de deshidratación térmica para evitar la desnaturalización de la proteína fúngica.

### 2. Capa Física (Hardware IoT)
* Nodos sensores basados en microcontroladores (ESP32/Arduino).
* Lectura paramétrica en sitio (Datalogger local / Display OLED) para monitoreo de temperatura y humedad en tiempo real.

### 3. Capa Lógica (Frontend & Visualización)
* **Framework:** Nuxt 3 + Vue 3.
* **Estilizado:** Tailwind CSS con arquitectura de diseño *Glassmorphism* y reactividad B2B Dark/Light mode.
* **Motor de Animación:** Generación algorítmica de "Esporas de Datos" utilizando CSS y Vanilla JS.
* **Telemetría:** Consumo de archivos JSON locales para el renderizado estático del panel de control.

---

## 🚀 Despliegue del Frontend (Entorno de Desarrollo)

Para levantar la interfaz de telemetría B2B en tu máquina local, sigue estos pasos:

### Prerrequisitos
Asegúrate de tener instalado [Node.js](https://nodejs.org/) (v18 o superior).

### Instalación
1. Clona el repositorio:
   ```bash
   git clone [https://github.com/tu-usuario/cepametrica.git](https://github.com/tu-usuario/cepametrica.git)