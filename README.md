# Editable form elements for vue js 3

### Editable input

**_Available props_**

```
value
type
name
emptyValue
defaultShowInput
```

Example

```html

<editable-input
    :default-show-input=true
    value="editable value"
    name="price"
/>
```

---

### Editable select

**_Available props_**

```
value
options
name
emptyValue
defaultShowInput
```

Example

```html

<editable-select
    value="SK"
    :default-show-input=false
    :options="{SK:'Slovakia',CZ:'Czech republic',PL:'Poland'}"
    name="price"
/>
```

---

### Editable textarea

**_Available props_**

```
value
name
emptyValue
defaultShowInput
rows
cols
maxLength
```

Example

```html

<editable-textarea value="This is text in textarea" name="text-input"/>
```

---

### Editable checkbox

**_Available props_**

```
value
options
name
defaultShowInput
```

Example

```html

<editable-checkbox :value=false>
    <template #inputs>
        <input type="hidden" value="hello">
    </template>
</editable-checkbox>
```

