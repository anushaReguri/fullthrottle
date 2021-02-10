export const getDate=(givenDate)=>{
    let DATE_OPTIONS = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
     let date=new Date(givenDate)                         
     return   date.toLocaleDateString('en-US', DATE_OPTIONS)
  }