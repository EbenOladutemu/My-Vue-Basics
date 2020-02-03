let app = new Vue({
		el:'#form',
		data:{
			text:'Basic Data binding',
			frameworks:['Vue', 'React', 'Angular', 'Symfony', 'Laravel'],
			list:'',
			title:'Thank you for doing that!',
			classRed: 'color-red',
			isLoading: false,
			blue: 'Click me to turn to green',
			green: '',
			isSending : false,
			beforeSending: 'Send your message',
			sending: '',
			yellowBtn: '',
			change:'',
		},
		function:{
			sentBtn(){

			}
		},
		 methods:{
			  addToList(){
					this.frameworks.push(this.list);
					this.list='';
			},
				removeFromList(){
					this.frameworks.pop();
				},
				toggle(){
					this.isLoading = true;
					this.blue = '';
					this.green = 'Yaay! I\'m now green!';
				},
				send(){
					this.isSending = true,setTimeout(sentBtn,3000);
					this.beforeSending = '';
					this.sending = 'Please wait your message is sending...';
					this.yellowBtn = 'btn-warning';
				},
				show(){
					this.change = "Change the text to this";
				}
		 }
	});
	function sentBtn() {
				alert( 'Sent' );
			}
	Vue.component('name',{
		template: '<p><slot>Ebenezer</slot></p>'
	});
	new Vue ({
		el: '#second',
	})	