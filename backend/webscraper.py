from urllib import request
import json
import re

def removeTags(text):
    formatted = re.compile('<.*?>|&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-f]{1,6});')
    clean = re.sub(formatted, '', text)
    return clean


def getInfo(code):
    url = request.Request((f"https://www.handbook.unsw.edu.au/api/content/render/false/query/+unsw_psubject.implementationYear:2021%20+unsw_psubject.studyLevel:undergraduate%20+unsw_psubject.educationalArea:{code}*%20+unsw_psubject.active:1%20+unsw_psubject.studyLevelValue:ugrd%20+deleted:false%20+working:true%20+live:true/orderby/unsw_psubject.code%20asc/limit/10000/offset/0"))
    with request.urlopen(url) as courseDetails:
        charset=courseDetails.info().get_content_charset()
        courseData = courseDetails.read().decode('utf-8')
        obj = json.loads(courseData)        
        for i in obj['contentlets']:
            try:
                print(i['code'], i['title'], i ['creditPoints'], i['teachingPeriod'], removeTags(i['description']))
            except KeyError:
                if KeyError == 'teachingPeriod':
                    print(i['code'], i['title'], i['creditPoints'], removeTags(i['description']))
                    pass
                elif KeyError == 'creditPoints':
                    print(i['code'], i['title'], i['teachingPeriod'], removeTags(i['description']))
                    pass
                elif KeyError == 'description':
                    print(i['code'], i['title'], i['creditPoints'], i['teachingPeriod'])
                    pass
            except UnicodeEncodeError:
                pass


courseCodes = ['ACCT', 'ACTL', 'AERO', 'ANAT', 'ARCH', 'ARTS', 'ASIA', 'ATSI', 'AUST', 'AVIF', 'BABS', 'BEES', 'BEIL', 'BENV', 'BINF', 'BIOC', 'BIOM', 'BIOS', 'BIOT', 'BLDG', 'CDEV',
                'CEIC', 'CHEM', 'CHEN', 'CLIM', 'CODE', 'COMM', 'COMP', 'CONS', 'CRIM', 'CRTV', 'CVEN', 'DATA', 'DESN', 'DPBS', 'DPGE', 'DPST', 'ECON', 'EDST', 'ELEC', 'ENGG',
                'ENGL', 'ENVS', 'EXCH', 'FINS', 'FOOD', 'GENC', 'GENE', 'GENL', 'GENM', 'GENS', 'GENY', 'GEOL', 'GEOS', 'GMAT', 'GSBE', 'GSOE', 'HDAT', 'HESC', 'HIST', 'HUML', 'HUMS',
                'IDES', 'IEST', 'INFS', 'INST', 'INTA', 'INTD', 'JURD', 'LAND', 'LAWS', 'LING', 'MANF', 'MARK', 'MATH', 'MATS', 'MBAX' ,'MDCN', 'MDIA', 'MECH', 'MERE', 'MFAC', 'MFIN',
                'MGMT', 'MICR', 'MINE', 'MMAN', 'MNGT', 'MODL', 'MSCI', 'MTRN', 'MUSC', 'NANO', 'NCHR', 'NEUR', 'OBST', 'OPTM', 'PATH', 'PHAR', 'PHCM', 'PHIL', 'PHOP', 'PHSL', 'PHTN',
                'PHYS', 'PLAN', 'PLTX', 'POLS', 'POLY', 'PPEC', 'PSCY', 'PSYC', 'PTRL', 'REGZ', 'REST', 'RISK', 'SCIF', 'SENG', 'SLSP', 'SOCA', 'SOCF', 'SOCW', 'SOLA', 'SOMS', 'SOSS',
                'SPRC', 'SRAP', 'STAM', 'SURG', 'SUSD', 'SWCH', 'TABL', 'TELE', 'UDES', 'VISN', 'WOMS', 'YENG', 'YMED', 'ZZBU', 'ZZEN', 'ZZSC']
for i in range(len(courseCodes)):
    getInfo(courseCodes[i])

