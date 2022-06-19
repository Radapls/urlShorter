import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = {
    inputUrl: ''
  };
  isFormSubmitted = false;
  shortUrl = '';
  isTextCopied = false;

  constructor() {}

    onSubmitUrlForm(urlForm: any)
    {
      if(urlForm.valid)
      {
        this.isFormSubmitted = true;
         
      }
      console.log("Fomulario enviado");
    }

    copyUrl(shortUrlElementRef: any)
    {
      let inputElement = document.createElement('input');

      inputElement.setAttribute('type', 'text');
      inputElement.setAttribute('value', shortUrlElementRef.innetHTML);

      inputElement.select();

      inputElement.setSelectionRange(0, 999999); 

    try
    {
      navigator.clipboard.writeText(inputElement.value);

      this.isTextCopied = true;

      setTimeout(() => {
      this.isTextCopied = false;
      },2000);

    } catch(e) {
      console.log('error while copying..', e.toString())
    }

      

    }
    
    reset()
    {
      this.model.inputUrl = '';
      this.isFormSubmitted = false;
      this.isTextCopied = false;
    }  
  
}
