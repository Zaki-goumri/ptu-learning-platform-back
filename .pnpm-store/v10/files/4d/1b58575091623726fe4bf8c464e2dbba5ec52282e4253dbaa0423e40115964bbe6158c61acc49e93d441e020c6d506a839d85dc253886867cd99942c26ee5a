var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AdminResourceService_1;
import { Injectable } from '@nestjs/common';
let AdminResourceService = AdminResourceService_1 = class AdminResourceService {
    static resources = new Set();
    static add(resources) {
        for (const resource of resources) {
            if (AdminResourceService_1.resources.has(resource)) {
                return;
            }
            AdminResourceService_1.resources.add(resource);
        }
    }
    static getResources() {
        return Array.from(AdminResourceService_1.resources);
    }
};
AdminResourceService = AdminResourceService_1 = __decorate([
    Injectable()
], AdminResourceService);
export default AdminResourceService;
