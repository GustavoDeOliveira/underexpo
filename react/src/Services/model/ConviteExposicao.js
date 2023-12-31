/*
 * Swagger UnderExpo - OpenAPI 3.0
 * Definição OpenAPI 3.0 para a API do projeto UnderExpo.
 *
 * OpenAPI spec version: 0.0.1
 * Contact: gustavo.oliveira@aluno.riogrande.ifrs.edu.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.47
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The ConviteExposicao model module.
 * @module model/ConviteExposicao
 * @version 0.0.1
 */
export class ConviteExposicao {
  /**
   * Constructs a new <code>ConviteExposicao</code>.
   * @alias module:model/ConviteExposicao
   * @class
   * @param painelId {Number} 
   * @param nome {String} 
   * @param organizador {String} 
   */
  constructor(painelId, nome, organizador) {
    this.painelId = painelId;
    this.nome = nome;
    this.organizador = organizador;
  }

  /**
   * Constructs a <code>ConviteExposicao</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConviteExposicao} obj Optional instance to populate.
   * @return {module:model/ConviteExposicao} The populated <code>ConviteExposicao</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ConviteExposicao();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('painelId'))
        obj.painelId = ApiClient.convertToType(data['painelId'], 'Number');
      if (data.hasOwnProperty('nome'))
        obj.nome = ApiClient.convertToType(data['nome'], 'String');
      if (data.hasOwnProperty('organizador'))
        obj.organizador = ApiClient.convertToType(data['organizador'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
ConviteExposicao.prototype.id = undefined;

/**
 * @member {Number} painelId
 */
ConviteExposicao.prototype.painelId = undefined;

/**
 * @member {String} nome
 */
ConviteExposicao.prototype.nome = undefined;

/**
 * @member {String} organizador
 */
ConviteExposicao.prototype.organizador = undefined;

