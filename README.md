# Editable form elements for vue js 3

### Editable input

**_Available props_**

```
value -> value of input
type -> type of input
name -> name of input send in posted event
empty-value -> Custom value (string) to show when no `value` prop is set
show-input -> Boolean value, whether to show value or input on load
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
value -> value of input
options -> Select options object
name -> name of input send in posted event
empty-value -> Custom value (string) to show when no `value` prop is set
show-input -> Boolean value, whether to show value or input on load
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
value -> value of input
name -> name of input send in posted event
empty-value -> Custom value (string) to show when no `value` prop is set
show-input -> Boolean value, whether to show value or input on load
rows -> columns of textarea
cols -> rows of textarea
maxLength -> Max lenght of string
```

Example

```html

<editable-textarea value="This is text in textarea" name="text-input"/>
```

---

### Editable checkbox

**_Available props_**

```
value -> value of input
options -> checkbox options with two values
name -> name of input send in posted event
show-input -> Boolean value, whether to show value or input on load
```

Example

```html

<editable-checkbox :value=false>
    <template #inputs>
        <input type="hidden" value="hello">
    </template>
</editable-checkbox>
```

