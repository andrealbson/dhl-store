import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">
        <span class="badge bg-secondary">{this.props.count}</span> <span className="legend-produts text-muted">Produtos</span>
        </div>
        <div className="filter-sort">
          Listar por:
          <select className="select"
            value={this.props.sort}
            onChange={this.props.sortProducts}
          >
            <option value="latest">Novidades</option>
            <option value="lowest">Menor Preço</option>
            <option value="highest">Mais vendidos</option>
          </select>
        </div>
        <div className="filter-sort filter-size">
          Filtrar por:
          <select className="select"
            value={this.props.size}
            onChange={this.props.filterProducts}
          >
            <option value="">Selecione uma opção</option>
            <option value="XS">Popularidade</option>
            <option value="S">Melhores avaliados</option>
            <option value="M">Em Promoção</option>
            <option value="L">Com desonto à vista</option>
          </select>
        </div>
      </div>
    );
  }
}