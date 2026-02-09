# 🎬 Star Wars: Clone Wars Quotes API

> [!NOTE]
> A static, read-only API that provides the opening quotes featured at the beginning of each episode of **Star Wars: The Clone Wars**.

<br>


### 📖 Endpoints

| Endpoint | Description |
| :--- | :--- |
| `../seasons/` | Returns all seasons, episodes, and quotes. |
| `../seasons/{s_id}/` | Returns all episodes and quotes from a specific season (e.g., `s7`). |
| `../seasons/s7/{e_id}/` | Returns the quote from a specific episode (e.g., `e3`). |

<br>

### 🚀 Usage Examples

This API is **read-only** and returns data in **JSON** format.

#### 1. All seasons  
https://j-atj.github.io/apiclonewars/seasons/

#### 2. A full season (Season 1)  
https://j-atj.github.io/apiclonewars/seasons/s1/

#### 3. A specific episode (Season 1, Episode 1)  
https://j-atj.github.io/apiclonewars/seasons/s1/e1/

<br>