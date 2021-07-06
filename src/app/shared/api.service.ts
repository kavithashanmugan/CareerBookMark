import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {


  //apiURL:string = 'https://careerbookmarkbe.herokuapp.com/api/';
  //apiURL:String= 'http://localhost:4000/api/'

  apiURL:string='https://careerbookmarkbe2.herokuapp.com/api/';
  constructor(private http: HttpClient) { 


  }
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
     "Access-Control-Allow-Credentials":" true ",
"Access-Control-Allow-Methods": "OPTIONS, GET, POST",
"Access-Control-Allow-Headers": "Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control"

    })
  }  

  signUpFireBase(User){
    return this.http.post(`${this.apiURL}/signUpFireBase`,User)
    
  }
  signUpCompanyFireBase(company){
    return this.http.post(`${this.apiURL}/signUpCompanyFireBase`,company)
  }

  createProfile(UserDetails){
    let formData:any = Object.assign(UserDetails.value)
    console.log("user details..",formData)
    return this.http.post(`${this.apiURL}/createProfile`,formData)
  }
  createCompanyProfile(CompanyDetails){
    let formData:any = Object.assign(CompanyDetails.value)
    console.log("user details..",formData)
    return this.http.post(`${this.apiURL}/createCompanyProfile`,formData)
  }

  getProfile(userId){
    
    
    return this.http.get(`${this.apiURL}/getProfile/`+ userId)
    
  }
  getJobById(jobId){
    return this.http.get(`${this.apiURL}/getJobById/`+ jobId)
  }
  getAppliedJobs(userId){
    return this.http.get(`${this.apiURL}/getAppliedJobs/`+ userId)
  }
  getCompanyProfile(hirerId){
  
    
    return this.http.get(`${this.apiURL}/getCompanyProfile/`+ hirerId)
    
  }


  getAllProfiles(Id){
    
    
    return this.http.get(`${this.apiURL}/getAllProfiles/`+ Id)
    
  }

  getAllJobs(){
    return this.http.get(`${this.apiURL}/getAllJobs`)
  }
  
  postJob(JobDetails){
    let formData:any = Object.assign(JobDetails.value)
    console.log("job details..",formData)
    return this.http.post(`${this.apiURL}/postJob`,formData)
  }
  searchJobs(JobSearchForm){
    let formData:any = Object.assign(JobSearchForm.value)
    console.log("job search..",formData)
    return this.http.post(`${this.apiURL}/searchJobs`,formData)
  }
  searchPostedJobs(JobSearchForm){
    let formData:any = Object.assign(JobSearchForm.value)
    console.log("job search posted..",formData)
    return this.http.post(`${this.apiURL}/searchPostedJobs`,formData)
  }

  updateProfile(ProfileForm){
    let formData:any = Object.assign(ProfileForm.value)
    console.log("job search..",formData)
    return this.http.post(`${this.apiURL}/updateProfile`,formData)
  }

  applyJob(requestObj){
    
    console.log("hitting apply job in api")
    return this.http.post(`${this.apiURL}/applyJob`,requestObj)
  }
  getJobByHirerId(hirerId){
    return this.http.post(`${this.apiURL}/getJobByHirerId`,hirerId)
  }

  getClosedJobsByHirer(hirerId){
    return this.http.post(`${this.apiURL}/getClosedJobsByHirer`,hirerId)
  }

  getOpenJobsByHirer(hirerId){
    console.log("hitting get open jobs by hirer")
    return this.http.post(`${this.apiURL}/getOpenJobsByHirer`,hirerId)
  }

  getAppliedCandidates(jobId){
    return this.http.get(`${this.apiURL}/getAppliedCandidates/`+ jobId)
  }

closeJob(jobId){
  
  return this.http.post(`${this.apiURL}/closeJob`,jobId)
}
shortListCandidates(shortListObj){
return this.http.post(`${this.apiURL}/shortListCandidates`,shortListObj)
}
rejectCandidates(rejectListObj){
  return this.http.post(`${this.apiURL}/rejectCandidates`,rejectListObj)
}

getShortListedCandidates(jobId){
  return this.http.get(`${this.apiURL}/getShortListedCandidates/`+ jobId)
}

getRejectedCandidates(jobId){
  return this.http.get(`${this.apiURL}/getRejectedCandidates/`+ jobId)
}
  
}
