# 🎬 Star Wars: Clone Wars Quotes API

Una API de lectura estática que sirve las frases célebres que aparecen al inicio de cada episodio de **The Clone Wars**.

<br>

### 🚀 Cómo usar la API

La API es de sólo lectura y devuelve los datos en formato **JSON**. 



#### 1. Obtener todas las temporadas
https://j-atj.github.io/apiclonewars/seasons/

#### 2. Obtener una temporada completa (Temporada 1)
https://j-atj.github.io/apiclonewars/seasons/s1/


#### 3. Obtener un episodio específico (Temporada 1, Episodio 1)
https://j-atj.github.io/apiclonewars/seasons/s1/e1/

<br>

### 📖 Endpoints disponibles

| Endpoint | Descripción |
| :--- | :--- |
| `/seasons/` | Obtiene todas las temporadas, episodios y frases. |
| `/seasons/{s_id}/` | Obtiene toda la información de una temporada específica (ej: `s7`). |
| `/seasons/{s_id}/{e_id}/` | Obtiene la frase de un episodio específico (ej: `e3`). |

<br>
