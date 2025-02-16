# CRISS-product-card

Este es un paquete de pruebas de despliegue en NPM

### Cristobal Colmenares

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'criss-product-card'
```

```
<ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, count, maxCount, isMaxCountReached, increaseBy }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
</ProductCard>
```
