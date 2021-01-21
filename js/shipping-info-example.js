var shipping_form = VGSCollect.create('tntq4dwvhri', 'sandbox', function(state) {
  document.getElementById('shipping-preview').innerText = JSON.stringify(state, null, '  ');
});

shipping_form.field('#cc-first-name .form-control', {
  type: 'text',
  name: 'shippingFirstName',
  placeholder: 'Joe',
  validations: ['required'],
});

shipping_form.field('#cc-last-name .form-control', {
  type: 'text',
  name: 'shippingLastName',
  placeholder: 'Business',
  validations: ['required'],
});

shipping_form.field('#cc-address .form-control', {
  type: 'text',
  name: 'shippingAddress',
  placeholder: 'Address',
  validations: ['required'],
});

shipping_form.field('#cc-country .form-control', {
  type: 'dropdown',
  name: 'shippingCountry',
  placeholder: 'Select Country',
  validations: ['required'],
  options: [
    {value: 'USA', text: 'United States of America'},
    {value: 'Canada', text: 'Canada'},
    {value: 'Mexica', text: 'Mexica'},
  ]
});

shipping_form.field('#cc-city .form-control', {
  type: 'text',
  name: 'shippingCity',
  placeholder: 'City',
  validations: ['required'],
});

shipping_form.field('#cc-region .form-control', {
  type: 'text',
  name: 'shippingRegion',
  placeholder: 'Region',
  validations: ['required'],
});

shipping_form.field('#cc-zip .form-control', {
  type: 'zip-code',
  name: 'shippingZip',
  placeholder: 'Zip Code',
  validations: ['required'],
});

shipping_form.on('enterPress', function () {
  const targetForm = document.getElementById('cc-form-shipping-info');
  submitForm(shipping_form, targetForm);
});

document.getElementById('cc-form-shipping-info')
.addEventListener('submit', function(e) {
  let targetForm = e.target;
  e.preventDefault();
  submitForm(shipping_form, targetForm);
}, false);
