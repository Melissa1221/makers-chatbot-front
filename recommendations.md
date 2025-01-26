# Sistema de Recomendaciones

Este documento explica cómo funciona el sistema de recomendaciones del e-commerce chatbot.

## Funcionamiento General

El sistema utiliza un sistema de puntuación (score) de 0 a 1 para determinar qué tan recomendado es un producto.

### Tipos de Recomendación

| Tipo | Score | Descripción |
|------|--------|-------------|
| `HIGHLY_RECOMMENDED` | ≥ 0.7 | Productos muy recomendados |
| `RECOMMENDED` | ≥ 0.4 | Productos recomendados |
| `NOT_RECOMMENDED` | < 0.4 | Productos no recomendados |

### Cálculo de Scores

- **Primera vista**: El producto comienza con un score de 0.5
- **Vistas subsiguientes**: El score aumenta 0.1 por cada vista
- **Límite**: El score nunca puede superar 1.0

```python
# Ejemplo de cálculo
if es_primera_vista:
    score = 0.5
else:
    score = min(1.0, score_actual + 0.1)
```

## APIs Disponibles

### 1. Registrar Vista de Producto
```http
POST /api/v1/recommendations/track/view/{product_id}
```

**Ejemplo de uso:**
```bash
# Registrar que alguien vio el producto 1
curl -X POST http://localhost:8000/api/v1/recommendations/track/view/1
```

**Respuesta:**
```json
{
    "message": "Product view tracked successfully"
}
```

### 2. Obtener Recomendación de un Producto
```http
GET /api/v1/recommendations/product/{product_id}
```

**Ejemplo de uso:**
```bash
curl http://localhost:8000/api/v1/recommendations/product/1
```

**Respuesta:**
```json
{
    "product_id": 1,
    "recommendation_type": "highly_recommended",
    "score": 0.8,
    "updated_at": "2024-01-26T12:00:00"
}
```

### 3. Obtener Productos por Tipo de Recomendación
```http
GET /api/v1/recommendations/type/{recommendation_type}
```

**Tipos válidos:**
- highly_recommended
- recommended
- not_recommended

**Ejemplo de uso:**
```bash
curl http://localhost:8000/api/v1/recommendations/type/highly_recommended
```

**Respuesta:**
```json
[
    {
        "product_id": 1,
        "recommendation_type": "highly_recommended",
        "score": 0.9,
        "updated_at": "2024-01-26T12:00:00"
    },
    {
        "product_id": 2,
        "recommendation_type": "highly_recommended",
        "score": 0.8,
        "updated_at": "2024-01-26T11:00:00"
    }
]
```

### 4. Actualizar Recomendación Manualmente
```http
PUT /api/v1/recommendations/product/{product_id}
```

**Ejemplo de uso:**
```bash
curl -X PUT http://localhost:8000/api/v1/recommendations/product/1 \
     -H "Content-Type: application/json" \
     -d '{
         "recommendation_type": "highly_recommended",
         "score": 0.9
     }'
```

## Ejemplo de Evolución de un Producto

Supongamos que tenemos un producto nuevo:

1. **Primera vista**
   - Score inicial: 0.5
   - Tipo: RECOMMENDED

2. **Segunda vista**
   - Score: 0.6
   - Tipo: RECOMMENDED

3. **Tercera vista**
   - Score: 0.7
   - Tipo: HIGHLY_RECOMMENDED

4. **Cuarta vista**
   - Score: 0.8
   - Tipo: HIGHLY_RECOMMENDED

## Base de Datos

Las recomendaciones se almacenan en la tabla `product_recommendations`:

```sql
CREATE TABLE product_recommendations (
    product_id INTEGER PRIMARY KEY,
    recommendation_type TEXT NOT NULL,
    score FLOAT NOT NULL DEFAULT 0.0,
    updated_at TIMESTAMP WITH TIME ZONE,
    CONSTRAINT score_range CHECK (score >= 0.0 AND score <= 1.0),
    CONSTRAINT valid_type CHECK (
        recommendation_type IN (
            'highly_recommended',
            'recommended',
            'not_recommended'
        )
    )
);
```

## Consideraciones

1. Los scores se normalizan automáticamente entre 0 y 1
2. El tipo de recomendación se actualiza automáticamente según el score
3. Las recomendaciones se ordenan por score (mayor a menor)
4. La fecha de actualización se guarda automáticamente
5. Existe validación en la base de datos para asegurar datos correctos 