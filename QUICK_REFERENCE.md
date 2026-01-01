# 🎨 Quick Reference Guide - Website Enhancements

## Instant Usage Guide

### 1. Scroll Animations (CSS Classes)

```html
<!-- Fade up on scroll -->
<div class="scroll-reveal">Content</div>

<!-- Slide from left -->
<div class="scroll-fade-left">Content</div>

<!-- Slide from right -->
<div class="scroll-fade-right">Content</div>

<!-- Scale up -->
<div class="scroll-scale">Content</div>

<!-- Blur reveal -->
<div class="blur-reveal">Content</div>
```

**JavaScript trigger:**
```javascript
// Add 'revealed' class when element is in viewport
element.classList.add('revealed');
```

---

### 2. Skeleton Loaders

```jsx
import Skeleton from './components/Skeleton';

// Pre-built skeletons
<Skeleton.Card />
<Skeleton.Text lines={3} />
<Skeleton.Image />
<Skeleton.Avatar size="lg" />
<Skeleton.Button />
<Skeleton.Testimonial />
<Skeleton.BlogPost />
<Skeleton.ServiceCard />
<Skeleton.Calculator />

// Custom skeleton
<div className="skeleton h-20 w-full rounded-xl" />
<div className="skeleton-text" />
<div className="skeleton-title" />
<div className="skeleton-circle w-16 h-16" />
```

---

### 3. Custom Hooks

```jsx
import { 
    useScrollReveal, 
    useStaggerAnimation, 
    useScrollProgress,
    useInView 
} from './utils/useScrollAnimations';

// Scroll reveal
function Component() {
    const { ref, isVisible } = useScrollReveal({
        threshold: 0.1,      // 10% visible
        rootMargin: '0px',   // Margin around viewport
        triggerOnce: true    // Animate only once
    });
    
    return <div ref={ref}>{isVisible && 'Visible!'}</div>;
}

// Stagger animation
function List() {
    const visibleItems = useStaggerAnimation(5, 100); // 5 items, 100ms delay
    
    return items.map((item, i) => (
        <div style={{ opacity: visibleItems.includes(i) ? 1 : 0 }}>
            {item}
        </div>
    ));
}

// Scroll progress
function ProgressBar() {
    const progress = useScrollProgress(); // 0-100
    return <div style={{ width: `${progress}%` }} />;
}

// In view detection
function Component() {
    const { ref, inView } = useInView({ threshold: 0.5 });
    return <div ref={ref}>{inView ? 'In view!' : 'Not visible'}</div>;
}
```

---

### 4. Visual Effects (CSS Classes)

```html
<!-- Gradient border -->
<div class="gradient-border p-8">Content</div>

<!-- Text effects -->
<h1 class="text-glow">Glowing text</h1>
<h1 class="text-stroke">Outlined text</h1>

<!-- Interactive effects -->
<div class="magnetic">Magnetic hover</div>
<div class="tilt-card">3D tilt on hover</div>

<!-- Stagger children -->
<div class="stagger-children">
    <div>Item 1 (0.1s delay)</div>
    <div>Item 2 (0.2s delay)</div>
    <div>Item 3 (0.3s delay)</div>
</div>
```

---

### 5. New Components

```jsx
// Scroll progress bar (already added to App.jsx)
import ScrollProgress from './components/ScrollProgress';
<ScrollProgress />

// Back to top button (already added to App.jsx)
import BackToTop from './components/BackToTop';
<BackToTop />
```

---

### 6. Animation Classes (Existing + New)

```html
<!-- Existing animations -->
<div class="animate-float">Floating</div>
<div class="animate-glow">Glowing</div>
<div class="animate-pulse-slow">Slow pulse</div>

<!-- Hover effects -->
<div class="hover-lift">Lifts on hover</div>
<div class="hover-scale">Scales on hover</div>
<div class="hover-rotate">Rotates on hover</div>

<!-- Gradient text -->
<h1 class="gradient-text">Animated gradient</h1>
<h1 class="gradient-text-primary">Primary gradient</h1>
```

---

### 7. Button Styles

```html
<!-- Primary button -->
<button class="btn-primary">Click Me</button>

<!-- Navy button -->
<button class="btn-navy">Click Me</button>

<!-- Secondary button -->
<button class="btn-secondary">Click Me</button>

<!-- Outline button -->
<button class="btn-outline">Click Me</button>

<!-- Glass button (for dark backgrounds) -->
<button class="btn-glass">Click Me</button>
```

---

### 8. Card Styles

```html
<!-- Standard card -->
<div class="card">Content</div>

<!-- Navy card (dark) -->
<div class="card-navy">Content</div>

<!-- Glass card -->
<div class="card-glass">Content</div>

<!-- Gradient card -->
<div class="card-gradient">Content</div>
```

---

### 9. Section Styles

```html
<!-- Standard section -->
<section class="section">Content</section>

<!-- Alternate section (gray background) -->
<section class="section-alt">Content</section>

<!-- Navy section (dark) -->
<section class="section-navy">Content</section>
```

---

### 10. Utility Classes

```html
<!-- Container -->
<div class="container-custom">Centered content</div>

<!-- Text balance -->
<p class="text-balance">Balanced text wrapping</p>

<!-- Backdrop blur -->
<div class="backdrop-blur-glass">Glassmorphism</div>

<!-- 3D perspective -->
<div class="perspective">
    <div class="preserve-3d">3D child</div>
</div>
```

---

## 🎯 Common Patterns

### Loading State
```jsx
{loading ? (
    <Skeleton.Card />
) : (
    <div className="card scroll-reveal">
        <h3>Title</h3>
        <p>Content</p>
    </div>
)}
```

### Animated List
```jsx
<div className="grid md:grid-cols-3 gap-8">
    {items.map((item, i) => (
        <div key={i} className="card scroll-reveal" style={{ transitionDelay: `${i * 100}ms` }}>
            {item}
        </div>
    ))}
</div>
```

### Hero Section
```jsx
<section className="section-navy">
    <div className="container-custom">
        <h1 className="gradient-text animate-float">Title</h1>
        <p className="scroll-reveal">Description</p>
        <button className="btn-primary">CTA</button>
    </div>
</section>
```

### Testimonial Card
```jsx
<div className="card-navy scroll-scale">
    <div className="flex items-center gap-4 mb-4">
        <Skeleton.Avatar size="lg" />
        <div>
            <h4>Name</h4>
            <p>Role</p>
        </div>
    </div>
    <p className="text-lg italic">Quote</p>
</div>
```

---

## 🚀 Performance Tips

1. **Use `triggerOnce: true`** for scroll animations (default)
2. **Limit backdrop-blur** usage for better performance
3. **Use CSS transforms** instead of position changes
4. **Lazy load images** with loading="lazy"
5. **Respect reduced motion** - already implemented!

---

## ♿ Accessibility

All animations respect `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
    /* Animations disabled automatically */
}
```

Users who prefer reduced motion will see instant content without animations.

---

## 📱 Responsive Behavior

All utilities and components are fully responsive:
- Animations simplified on mobile
- Touch-friendly interactions
- Adaptive sizing
- Performance optimized

---

## 🎨 Color Variables

```css
--color-navy: #414393
--color-primary: #7C7ED1
--glass-bg: rgba(255, 255, 255, 0.1)
--shadow-glow: 0 0 40px rgba(124, 126, 209, 0.3)
```

---

## 📦 What's Included

✅ Scroll-triggered animations
✅ Skeleton loaders
✅ Custom hooks
✅ Progress indicator
✅ Back to top button
✅ Visual effects
✅ Reduced motion support
✅ Responsive design
✅ Performance optimized
✅ Accessibility compliant

---

**Happy coding! 🎉**
