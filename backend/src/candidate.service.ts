import { Injectable } from '@nestjs/common';
import * as XLSX from 'xlsx';
import { Candidate } from './candidate.model';

@Injectable()
export class CandidateService {
  private candidates: Candidate[] = [];

  processFile(body: { name: string; surname: string }, file: any) {
    const workbook = XLSX.read(file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    const excelData: any[] = XLSX.utils.sheet_to_json(sheet);

    if (!excelData.length) {
      throw new Error('El archivo Excel está vacío o no tiene datos válidos.');
    }

    const excelRow = excelData[0];

    if (typeof excelRow !== 'object' || excelRow === null) {
      throw new Error('Los datos en el Excel no tienen un formato válido.');
    }

    const seniority = excelRow['Seniority'];
    if (seniority !== 'junior' && seniority !== 'senior') {
      throw new Error('Seniority debe ser "junior" o "senior".');
    }
  
    const years = Number(excelRow['Years of experience']);
    if (isNaN(years)) {
      throw new Error('Years of experience debe ser un número.');
    }

    const candidate: Candidate = {
      name: body.name,
      surname: body.surname,
      seniority,
      years,
      availability: excelRow['Availability'] === true || excelRow['Availability'] === 'true',
    };

    this.candidates.push(candidate);

    return candidate;
  }

  getCandidates(): Candidate[] {
    return this.candidates;
  }
}
