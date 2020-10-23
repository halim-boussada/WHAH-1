import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient) {}
  ROOT_URL = "http://localhost:3000";

  registerCompanies(data) {
    return this.http.post(this.ROOT_URL + "/addCompany", data);
  }
  registerTC(data) {
    return this.http.post(this.ROOT_URL + "/addTC", data);
  }
  register(data) {
    return this.http.post(this.ROOT_URL + "/addStudents", data);
  }
  loginStudent(data) {
    return this.http.post(this.ROOT_URL + "/login", data);
  }
  loginCompanies(data) {
    return this.http.post(this.ROOT_URL + "/loginCompanies", data);
  }
  loginTC(data) {
    return this.http.post(this.ROOT_URL + "/loginTC", data);
  }

  httpRegister(obj) {
    console.log("this si inside ====>", obj);
    return this.http.post(this.ROOT_URL + `/api/users/registration`, obj);
  }
  httpRegisterCompany(obj) {
    console.log("this si inside ====>", obj);
    return this.http.post(this.ROOT_URL + `/api/users/registerCompany`, obj);
  }
  httpRegisterTrainingCenter(obj) {
    console.log("this si inside ====>", obj);
    return this.http.post(
      this.ROOT_URL + `/api/users/registerTrainingCenter`,
      obj
    );
  }

  httpSendVerificationRequest(name) {
    return this.http.post(
      this.ROOT_URL + "/api/users/sendVerificationRequest",
      name
    );
  }

  httpSendVerificationRequestCompany(name) {
    return this.http.post(
      this.ROOT_URL + "/api/users/sendVerificationRequestCompany",
      name
    );
  }

  httpSendVerificationRequestCenter(name) {
    return this.http.post(
      this.ROOT_URL + "/api/users/sendVerificationRequestCenter",
      name
    );
  }

  httpGetNonVerifiedStudents() {
    return this.http.get(this.ROOT_URL + "/api/users/getNonVerifiedStudents");
  }

  httpGetNonVerifiedCompanies() {
    return this.http.get(this.ROOT_URL + "/api/users/getNonVerifiedCompanies");
  }

  httpGetNonVerifiedCenters() {
    return this.http.get(this.ROOT_URL + "/api/users/getNonVerifiedCenters");
  }

  httpVerifyStudent(name) {
    return this.http.post(this.ROOT_URL + "/api/users/verifyStudent", name);
  }
  httprejectStudent(name) {
    return this.http.post(this.ROOT_URL + "/api/users/rejectStudent", name);
  }
  httpVerifyCompanies(name) {
    return this.http.post(this.ROOT_URL + "/api/users/verifyCompanies", name);
  }
  httprejectCompanies(name) {
    return this.http.post(this.ROOT_URL + "/api/users/rejectCompanies", name);
  }

  httpVerifyCenter(name) {
    return this.http.post(this.ROOT_URL + "/api/users/verifyCenter", name);
  }
  httprejectCenter(name) {
    return this.http.post(this.ROOT_URL + "/api/users/rejectCenter", name);
  }

  httpgetUserState(obj) {
    return this.http.post(this.ROOT_URL + "/api/users/getUsersatate", obj);
  }

  httpgetCompanyState(obj) {
    return this.http.post(this.ROOT_URL + "/api/users/getCompanysatate", obj);
  }

  httpgetCenterState(obj) {
    return this.http.post(this.ROOT_URL + "/api/users/getCentersatate", obj);
  }
  userProfil(obj) {
    return this.http.post(this.ROOT_URL + "/api/users/studentToken", obj);
  }
  compantProfil(obj) {
    return this.http.post(this.ROOT_URL + "/api/users/companyToken", obj);
  }
  tcProfil(obj) {
    return this.http.post(this.ROOT_URL + "/api/users/TcToken", obj);
  }
  uploadImg(img) {
    console.log("IMG HTTP SERVICE==> ", img);
    return this.http.post(this.ROOT_URL + "/upload", img);
  }
  updateData(obj){
    return this.http.post(this.ROOT_URL  + '/api/users/Update' , obj)
  }
  findProfil(str){
    return this.http.post(this.ROOT_URL  + '/api/users/findProfil' , str)
  }
  updateCompanyData(obj){
    return this.http.post(this.ROOT_URL  + '/api/company/Update' , obj)
  }
  httpGetPosts() {
    return this.http.get(this.ROOT_URL + "/api/posts");
  }
  httpAddPostCenter(obj) {
    return this.http.post(this.ROOT_URL + "/api/posts/addPost", obj);
  }
  httpdeletePost(obj) {
    console.log(obj)
    return this.http.post(this.ROOT_URL + "/api/posts/delete", obj);
  }
  updateTCData(obj){
    return this.http.post(this.ROOT_URL  + '/api/center/update' , obj)
  }
  savePosts(obj){
    return this.http.post(this.ROOT_URL  + '/api/addPosts' , obj)

  }

  httpdeletePostTc(obj) {
    console.log(obj)
    return this.http.post(this.ROOT_URL + "/api/posts/deleteTc", obj);
  }
  httpGetStudents() {
    return this.http.get(this.ROOT_URL + "/api/students");
  }
  httpGetCompanies() {
    return this.http.get(this.ROOT_URL + "/api/companies");
  }
  httpGetTrainingCenter() {
    return this.http.get(this.ROOT_URL + "/api/trainingCenters");
  }

  httpbanstudent(obj) {
    return this.http.post(this.ROOT_URL + "/api/users/ban/student", obj);
  }
  httpbancompany(obj) {
    return this.http.post(this.ROOT_URL + "/api/users/ban/company", obj);
  }
  httpbancenter(obj) {
    return this.http.post(this.ROOT_URL + "/api/users/ban/training", obj);
  }
  //find own company posts
  findCompanyPosts(obj){
    return this.http.post(this.ROOT_URL  + '/api/sreachByOwner' , obj)
  }
  //delete posts inside company profile using owner
  deleteCompanyPosts(obj){
    return this.http.post(this.ROOT_URL  + '/api/rmCompanyPosts' , obj)
  }
  //update posts from company profile
  updateCompanyPosts(obj){
    return this.http.post(this.ROOT_URL  + '/api/upCompanyPosts' , obj)
  }
  httpgetTcPosts(obj){
    return this.http.post(this.ROOT_URL  + '/api/users/postsTc' , obj)
  }
  update(array){
    return this.http.post(this.ROOT_URL+'/api/update',array);
  }
  //update company posts by id before modify
  postsToModify(obj){
    return this.http.post(this.ROOT_URL  + '/api/upCompanyPost' , obj)
  } 
  applystudent(obj){
    return this.http.post(this.ROOT_URL+'/api/student/apply',obj);
  }
  httpGetApplications(obj){
    return this.http.post(this.ROOT_URL+'/api/getNotification' , obj)
  }
  httpacceptApp(obj){
    return this.http.post(this.ROOT_URL+'/api/acceptapply',obj);
  }
  httpdeleteApplication(obj){
    return this.http.post(this.ROOT_URL  + '/api/deleteApply' , obj)
  }
}

